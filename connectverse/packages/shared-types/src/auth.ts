import { z } from 'zod';

// Authentication Types
export interface AuthUser {
  id: string;
  email: string;
  username: string;
  displayName: string;
  avatar?: string;
  verified: boolean;
  roles: UserRole[];
  permissions: Permission[];
  lastLoginAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserRole {
  id: string;
  name: string;
  description: string;
  permissions: Permission[];
  isDefault: boolean;
  createdAt: Date;
}

export interface Permission {
  id: string;
  name: string;
  resource: string;
  action: string;
  conditions?: PermissionCondition[];
}

export interface PermissionCondition {
  field: string;
  operator: 'eq' | 'ne' | 'gt' | 'lt' | 'gte' | 'lte' | 'in' | 'nin' | 'contains';
  value: any;
}

// JWT Token Types
export interface JWTPayload {
  sub: string; // user id
  email: string;
  username: string;
  roles: string[];
  permissions: string[];
  iat: number;
  exp: number;
  aud: string;
  iss: string;
  jti: string;
}

export interface RefreshToken {
  id: string;
  userId: string;
  token: string;
  expiresAt: Date;
  createdAt: Date;
  lastUsedAt?: Date;
  deviceInfo?: DeviceInfo;
  ipAddress?: string;
  userAgent?: string;
  isRevoked: boolean;
}

export interface DeviceInfo {
  deviceId: string;
  deviceName: string;
  deviceType: 'mobile' | 'desktop' | 'tablet' | 'tv' | 'watch' | 'other';
  os: string;
  osVersion: string;
  browser?: string;
  browserVersion?: string;
  appVersion: string;
}

// Authentication Providers
export type AuthProvider = 
  | 'email' 
  | 'google' 
  | 'facebook' 
  | 'apple' 
  | 'twitter' 
  | 'github' 
  | 'discord' 
  | 'linkedin' 
  | 'microsoft' 
  | 'amazon' 
  | 'metamask' 
  | 'walletconnect';

export interface AuthProviderConfig {
  provider: AuthProvider;
  clientId: string;
  clientSecret?: string;
  redirectUri: string;
  scopes: string[];
  enabled: boolean;
  displayName: string;
  icon: string;
  color: string;
}

export interface SocialAuthProfile {
  id: string;
  email?: string;
  username?: string;
  displayName: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  locale?: string;
  timezone?: string;
  verified: boolean;
  provider: AuthProvider;
  providerAccountId: string;
  accessToken: string;
  refreshToken?: string;
  expiresAt?: Date;
  tokenType?: string;
  scope?: string;
  idToken?: string;
  sessionState?: string;
}

// Multi-Factor Authentication
export interface MFAMethod {
  id: string;
  userId: string;
  type: MFAType;
  name: string;
  isEnabled: boolean;
  isVerified: boolean;
  secret?: string;
  backupCodes?: string[];
  phoneNumber?: string;
  email?: string;
  deviceId?: string;
  createdAt: Date;
  lastUsedAt?: Date;
}

export type MFAType = 
  | 'totp' 
  | 'sms' 
  | 'email' 
  | 'voice' 
  | 'push' 
  | 'hardware_key' 
  | 'biometric' 
  | 'backup_codes';

export interface MFAChallenge {
  id: string;
  userId: string;
  type: MFAType;
  challenge: string;
  expiresAt: Date;
  attempts: number;
  maxAttempts: number;
  verified: boolean;
  createdAt: Date;
}

export interface BiometricAuth {
  id: string;
  userId: string;
  deviceId: string;
  type: 'fingerprint' | 'face' | 'voice' | 'iris' | 'palm';
  publicKey: string;
  counter: number;
  isEnabled: boolean;
  createdAt: Date;
  lastUsedAt?: Date;
}

// Session Management
export interface Session {
  id: string;
  userId: string;
  deviceInfo: DeviceInfo;
  ipAddress: string;
  userAgent: string;
  location?: SessionLocation;
  isActive: boolean;
  createdAt: Date;
  expiresAt: Date;
  lastActivityAt: Date;
  refreshTokenId?: string;
}

export interface SessionLocation {
  country: string;
  region: string;
  city: string;
  latitude?: number;
  longitude?: number;
  timezone: string;
  isp?: string;
}

// Security Events
export interface SecurityEvent {
  id: string;
  userId: string;
  type: SecurityEventType;
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  metadata: SecurityEventMetadata;
  ipAddress: string;
  userAgent: string;
  deviceInfo?: DeviceInfo;
  location?: SessionLocation;
  resolved: boolean;
  resolvedAt?: Date;
  resolvedBy?: string;
  createdAt: Date;
}

export type SecurityEventType = 
  | 'login_success' 
  | 'login_failed' 
  | 'login_suspicious' 
  | 'password_changed' 
  | 'email_changed' 
  | 'mfa_enabled' 
  | 'mfa_disabled' 
  | 'account_locked' 
  | 'account_unlocked' 
  | 'device_added' 
  | 'device_removed' 
  | 'permission_granted' 
  | 'permission_revoked' 
  | 'data_export' 
  | 'data_deletion' 
  | 'suspicious_activity';

export interface SecurityEventMetadata {
  attemptedEmail?: string;
  failureReason?: string;
  mfaMethod?: MFAType;
  permissionChanged?: string;
  oldValue?: string;
  newValue?: string;
  [key: string]: any;
}

// Password Security
export interface PasswordPolicy {
  minLength: number;
  maxLength: number;
  requireUppercase: boolean;
  requireLowercase: boolean;
  requireNumbers: boolean;
  requireSpecialChars: boolean;
  forbidCommonPasswords: boolean;
  forbidPersonalInfo: boolean;
  maxAge: number; // days
  historyCount: number; // prevent reuse of last N passwords
}

export interface PasswordHistory {
  id: string;
  userId: string;
  passwordHash: string;
  createdAt: Date;
}

// Account Recovery
export interface RecoveryMethod {
  id: string;
  userId: string;
  type: 'email' | 'sms' | 'security_questions' | 'backup_codes' | 'trusted_contact';
  value: string;
  isVerified: boolean;
  isPrimary: boolean;
  createdAt: Date;
  lastUsedAt?: Date;
}

export interface RecoveryRequest {
  id: string;
  userId: string;
  type: 'password_reset' | 'account_recovery' | 'email_verification';
  token: string;
  method: RecoveryMethod;
  attempts: number;
  maxAttempts: number;
  expiresAt: Date;
  completed: boolean;
  completedAt?: Date;
  createdAt: Date;
  metadata?: Record<string, any>;
}

// Web3 Authentication
export interface Web3Wallet {
  id: string;
  userId: string;
  address: string;
  blockchain: 'ethereum' | 'polygon' | 'binance' | 'solana' | 'avalanche' | 'fantom';
  walletType: 'metamask' | 'walletconnect' | 'coinbase' | 'trust' | 'phantom' | 'other';
  isVerified: boolean;
  isPrimary: boolean;
  nonce: string;
  createdAt: Date;
  lastUsedAt?: Date;
}

export interface Web3AuthChallenge {
  id: string;
  address: string;
  nonce: string;
  message: string;
  expiresAt: Date;
  verified: boolean;
  createdAt: Date;
}

// Validation Schemas using Zod
export const LoginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  rememberMe: z.boolean().optional(),
  captcha: z.string().optional(),
});

export const RegisterSchema = z.object({
  email: z.string().email('Invalid email address'),
  username: z.string()
    .min(3, 'Username must be at least 3 characters')
    .max(30, 'Username must be less than 30 characters')
    .regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, 
           'Password must contain uppercase, lowercase, number, and special character'),
  confirmPassword: z.string(),
  displayName: z.string().min(1, 'Display name is required').max(50, 'Display name is too long'),
  acceptTerms: z.boolean().refine(val => val === true, 'You must accept the terms and conditions'),
  captcha: z.string().min(1, 'Please complete the captcha'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export const ForgotPasswordSchema = z.object({
  email: z.string().email('Invalid email address'),
  captcha: z.string().optional(),
});

export const ResetPasswordSchema = z.object({
  token: z.string().min(1, 'Reset token is required'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, 
           'Password must contain uppercase, lowercase, number, and special character'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export const ChangePasswordSchema = z.object({
  currentPassword: z.string().min(1, 'Current password is required'),
  newPassword: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, 
           'Password must contain uppercase, lowercase, number, and special character'),
  confirmPassword: z.string(),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export const MFASetupSchema = z.object({
  type: z.enum(['totp', 'sms', 'email']),
  phoneNumber: z.string().optional(),
  email: z.string().email().optional(),
  secret: z.string().optional(),
  code: z.string().length(6, 'Code must be 6 digits'),
});

export const MFAVerifySchema = z.object({
  code: z.string().length(6, 'Code must be 6 digits'),
  type: z.enum(['totp', 'sms', 'email', 'backup_codes']),
  rememberDevice: z.boolean().optional(),
});

export const Web3AuthSchema = z.object({
  address: z.string().regex(/^0x[a-fA-F0-9]{40}$/, 'Invalid Ethereum address'),
  signature: z.string().min(1, 'Signature is required'),
  message: z.string().min(1, 'Message is required'),
  walletType: z.enum(['metamask', 'walletconnect', 'coinbase', 'trust', 'phantom', 'other']),
});

// Type exports for validation
export type LoginInput = z.infer<typeof LoginSchema>;
export type RegisterInput = z.infer<typeof RegisterSchema>;
export type ForgotPasswordInput = z.infer<typeof ForgotPasswordSchema>;
export type ResetPasswordInput = z.infer<typeof ResetPasswordSchema>;
export type ChangePasswordInput = z.infer<typeof ChangePasswordSchema>;
export type MFASetupInput = z.infer<typeof MFASetupSchema>;
export type MFAVerifyInput = z.infer<typeof MFAVerifySchema>;
export type Web3AuthInput = z.infer<typeof Web3AuthSchema>;