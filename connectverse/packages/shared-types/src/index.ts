// User Types
export interface User {
  id: string;
  username: string;
  email: string;
  displayName: string;
  avatar?: string;
  bio?: string;
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
  profile: UserProfile;
  settings: UserSettings;
  stats: UserStats;
}

export interface UserProfile {
  firstName?: string;
  lastName?: string;
  dateOfBirth?: Date;
  gender?: 'male' | 'female' | 'other' | 'prefer_not_to_say';
  location?: Location;
  website?: string;
  socialLinks: SocialLinks;
  interests: string[];
  languages: string[];
  occupation?: string;
  education?: string;
  relationshipStatus?: 'single' | 'in_relationship' | 'married' | 'complicated';
  avatar3D?: Avatar3D;
}

export interface Avatar3D {
  model: string;
  textures: string[];
  animations: string[];
  accessories: Accessory[];
  environment?: string;
}

export interface Accessory {
  id: string;
  type: 'clothing' | 'jewelry' | 'glasses' | 'hat' | 'shoes';
  name: string;
  model: string;
  texture: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  isNFT: boolean;
  price?: number;
}

export interface SocialLinks {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
  tiktok?: string;
  snapchat?: string;
  discord?: string;
  github?: string;
}

export interface UserSettings {
  privacy: PrivacySettings;
  notifications: NotificationSettings;
  appearance: AppearanceSettings;
  security: SecuritySettings;
  accessibility: AccessibilitySettings;
}

export interface PrivacySettings {
  profileVisibility: 'public' | 'friends' | 'private';
  contactVisibility: 'everyone' | 'friends' | 'none';
  locationSharing: boolean;
  activityStatus: boolean;
  searchable: boolean;
  allowTagging: 'everyone' | 'friends' | 'none';
  allowMessaging: 'everyone' | 'friends' | 'none';
}

export interface NotificationSettings {
  push: boolean;
  email: boolean;
  sms: boolean;
  likes: boolean;
  comments: boolean;
  mentions: boolean;
  messages: boolean;
  friendRequests: boolean;
  groupInvites: boolean;
  eventInvites: boolean;
  marketing: boolean;
  digest: 'daily' | 'weekly' | 'monthly' | 'never';
}

export interface AppearanceSettings {
  theme: 'light' | 'dark' | 'auto';
  language: string;
  fontSize: 'small' | 'medium' | 'large';
  reducedMotion: boolean;
  colorScheme?: string;
}

export interface SecuritySettings {
  twoFactorAuth: boolean;
  biometricAuth: boolean;
  loginAlerts: boolean;
  sessionTimeout: number;
  trustedDevices: TrustedDevice[];
}

export interface TrustedDevice {
  id: string;
  name: string;
  type: 'mobile' | 'desktop' | 'tablet';
  lastUsed: Date;
  location?: string;
}

export interface AccessibilitySettings {
  screenReader: boolean;
  highContrast: boolean;
  largeText: boolean;
  voiceNavigation: boolean;
  subtitles: boolean;
  colorBlindSupport: boolean;
}

export interface UserStats {
  followers: number;
  following: number;
  posts: number;
  likes: number;
  comments: number;
  shares: number;
  views: number;
  level: number;
  xp: number;
  badges: Badge[];
  achievements: Achievement[];
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  earnedAt: Date;
  isNFT: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  progress: number;
  maxProgress: number;
  completed: boolean;
  reward?: Reward;
  completedAt?: Date;
}

export interface Reward {
  type: 'xp' | 'badge' | 'currency' | 'item';
  amount: number;
  item?: string;
}

// Post Types
export interface Post {
  id: string;
  authorId: string;
  author: User;
  content: PostContent;
  type: PostType;
  visibility: 'public' | 'friends' | 'private' | 'custom';
  audience?: string[];
  location?: Location;
  tags: string[];
  mentions: string[];
  reactions: Reaction[];
  comments: Comment[];
  shares: Share[];
  views: number;
  createdAt: Date;
  updatedAt: Date;
  scheduledAt?: Date;
  expiresAt?: Date;
  isEdited: boolean;
  editHistory?: PostEdit[];
  metadata: PostMetadata;
}

export type PostType = 
  | 'text' 
  | 'image' 
  | 'video' 
  | 'audio' 
  | 'story' 
  | 'poll' 
  | 'event' 
  | 'article' 
  | 'live' 
  | 'ar' 
  | 'vr' 
  | '3d';

export interface PostContent {
  text?: string;
  media?: MediaFile[];
  poll?: Poll;
  event?: Event;
  article?: Article;
  liveStream?: LiveStream;
  arContent?: ARContent;
  vrContent?: VRContent;
  threeDContent?: ThreeDContent;
}

export interface MediaFile {
  id: string;
  type: 'image' | 'video' | 'audio' | 'document';
  url: string;
  thumbnailUrl?: string;
  filename: string;
  size: number;
  duration?: number;
  dimensions?: { width: number; height: number };
  metadata?: MediaMetadata;
  aiGenerated: boolean;
  filters?: MediaFilter[];
}

export interface MediaMetadata {
  camera?: string;
  location?: Location;
  timestamp?: Date;
  faces?: FaceDetection[];
  objects?: ObjectDetection[];
  text?: TextDetection[];
  sentiment?: SentimentAnalysis;
}

export interface FaceDetection {
  boundingBox: BoundingBox;
  confidence: number;
  emotion?: string;
  age?: number;
  gender?: string;
}

export interface ObjectDetection {
  label: string;
  confidence: number;
  boundingBox: BoundingBox;
}

export interface TextDetection {
  text: string;
  confidence: number;
  boundingBox: BoundingBox;
  language?: string;
}

export interface BoundingBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface SentimentAnalysis {
  score: number;
  magnitude: number;
  label: 'positive' | 'negative' | 'neutral';
}

export interface MediaFilter {
  name: string;
  intensity: number;
  parameters?: Record<string, any>;
}

export interface Poll {
  question: string;
  options: PollOption[];
  allowMultiple: boolean;
  expiresAt: Date;
  totalVotes: number;
}

export interface PollOption {
  id: string;
  text: string;
  votes: number;
  voters: string[];
}

export interface Event {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location?: Location;
  isVirtual: boolean;
  virtualLink?: string;
  attendees: EventAttendee[];
  maxAttendees?: number;
  ticketPrice?: number;
  tags: string[];
}

export interface EventAttendee {
  userId: string;
  status: 'going' | 'maybe' | 'not_going';
  joinedAt: Date;
}

export interface Article {
  title: string;
  subtitle?: string;
  content: string;
  coverImage?: string;
  readTime: number;
  sections: ArticleSection[];
  references?: string[];
}

export interface ArticleSection {
  id: string;
  type: 'text' | 'image' | 'video' | 'code' | 'quote';
  content: string;
  metadata?: Record<string, any>;
}

export interface LiveStream {
  streamId: string;
  title: string;
  description?: string;
  streamUrl: string;
  thumbnailUrl?: string;
  isLive: boolean;
  startedAt?: Date;
  endedAt?: Date;
  viewers: number;
  maxViewers: number;
  quality: 'low' | 'medium' | 'high' | '4k';
  chat: ChatMessage[];
}

export interface ARContent {
  modelUrl: string;
  trackingType: 'marker' | 'markerless' | 'face' | 'world';
  markerImage?: string;
  animations: string[];
  interactions: ARInteraction[];
}

export interface ARInteraction {
  type: 'tap' | 'swipe' | 'pinch' | 'rotate';
  action: string;
  parameters?: Record<string, any>;
}

export interface VRContent {
  sceneUrl: string;
  environment: string;
  interactions: VRInteraction[];
  supportedDevices: string[];
}

export interface VRInteraction {
  type: 'gaze' | 'controller' | 'hand' | 'voice';
  action: string;
  parameters?: Record<string, any>;
}

export interface ThreeDContent {
  modelUrl: string;
  textureUrls: string[];
  animations: string[];
  lighting: LightingSettings;
  camera: CameraSettings;
}

export interface LightingSettings {
  ambient: number;
  directional: DirectionalLight[];
  point: PointLight[];
}

export interface DirectionalLight {
  color: string;
  intensity: number;
  direction: Vector3;
}

export interface PointLight {
  color: string;
  intensity: number;
  position: Vector3;
  distance: number;
}

export interface Vector3 {
  x: number;
  y: number;
  z: number;
}

export interface CameraSettings {
  position: Vector3;
  target: Vector3;
  fov: number;
  near: number;
  far: number;
}

export interface PostMetadata {
  aiGenerated: boolean;
  aiModel?: string;
  language: string;
  readability?: number;
  keywords: string[];
  categories: string[];
  mood: string;
  weather?: WeatherData;
  musicPlaying?: MusicData;
}

export interface WeatherData {
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  location: string;
}

export interface MusicData {
  title: string;
  artist: string;
  album?: string;
  spotifyId?: string;
  appleId?: string;
}

export interface PostEdit {
  timestamp: Date;
  changes: string[];
  reason?: string;
}

export interface Reaction {
  id: string;
  userId: string;
  type: ReactionType;
  createdAt: Date;
}

export type ReactionType = 
  | 'like' 
  | 'love' 
  | 'laugh' 
  | 'wow' 
  | 'sad' 
  | 'angry' 
  | 'care' 
  | 'celebrate' 
  | 'support' 
  | 'insightful';

export interface Comment {
  id: string;
  postId: string;
  authorId: string;
  author: User;
  content: string;
  media?: MediaFile[];
  parentId?: string;
  replies: Comment[];
  reactions: Reaction[];
  mentions: string[];
  createdAt: Date;
  updatedAt: Date;
  isEdited: boolean;
  isPinned: boolean;
}

export interface Share {
  id: string;
  userId: string;
  user: User;
  message?: string;
  createdAt: Date;
  platform?: 'internal' | 'facebook' | 'twitter' | 'instagram' | 'linkedin';
}

// Message Types
export interface Conversation {
  id: string;
  type: 'direct' | 'group' | 'channel';
  name?: string;
  description?: string;
  avatar?: string;
  participants: ConversationParticipant[];
  messages: Message[];
  lastMessage?: Message;
  unreadCount: number;
  createdAt: Date;
  updatedAt: Date;
  settings: ConversationSettings;
  metadata: ConversationMetadata;
}

export interface ConversationParticipant {
  userId: string;
  user: User;
  role: 'owner' | 'admin' | 'moderator' | 'member';
  joinedAt: Date;
  lastSeenAt?: Date;
  permissions: ParticipantPermissions;
}

export interface ParticipantPermissions {
  canAddMembers: boolean;
  canRemoveMembers: boolean;
  canEditInfo: boolean;
  canDeleteMessages: boolean;
  canPinMessages: boolean;
  canManageRoles: boolean;
}

export interface ConversationSettings {
  isArchived: boolean;
  isMuted: boolean;
  muteUntil?: Date;
  notifications: boolean;
  disappearingMessages: boolean;
  disappearingTime?: number;
  encryption: boolean;
  allowInvites: boolean;
  requireApproval: boolean;
}

export interface ConversationMetadata {
  totalMessages: number;
  totalMembers: number;
  createdBy: string;
  lastActivity: Date;
  tags: string[];
  category?: string;
}

export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  sender: User;
  type: MessageType;
  content: MessageContent;
  replyTo?: string;
  forwarded?: boolean;
  reactions: Reaction[];
  readBy: MessageRead[];
  deliveredTo: string[];
  createdAt: Date;
  updatedAt: Date;
  editedAt?: Date;
  deletedAt?: Date;
  expiresAt?: Date;
  metadata: MessageMetadata;
}

export type MessageType = 
  | 'text' 
  | 'image' 
  | 'video' 
  | 'audio' 
  | 'voice' 
  | 'file' 
  | 'location' 
  | 'contact' 
  | 'sticker' 
  | 'gif' 
  | 'poll' 
  | 'event' 
  | 'payment' 
  | 'ar' 
  | 'system';

export interface MessageContent {
  text?: string;
  media?: MediaFile[];
  location?: Location;
  contact?: ContactInfo;
  sticker?: Sticker;
  poll?: Poll;
  event?: Event;
  payment?: Payment;
  arContent?: ARContent;
  systemMessage?: SystemMessage;
}

export interface ContactInfo {
  name: string;
  phone?: string;
  email?: string;
  avatar?: string;
}

export interface Sticker {
  id: string;
  packId: string;
  name: string;
  url: string;
  animated: boolean;
}

export interface Payment {
  amount: number;
  currency: string;
  description?: string;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  transactionId?: string;
}

export interface SystemMessage {
  type: 'member_joined' | 'member_left' | 'name_changed' | 'avatar_changed' | 'admin_changed';
  data: Record<string, any>;
}

export interface MessageRead {
  userId: string;
  readAt: Date;
}

export interface MessageMetadata {
  encrypted: boolean;
  aiGenerated: boolean;
  translated: boolean;
  originalLanguage?: string;
  sentiment?: SentimentAnalysis;
  priority: 'low' | 'normal' | 'high' | 'urgent';
}

// Location Types
export interface Location {
  latitude: number;
  longitude: number;
  address?: string;
  city?: string;
  country?: string;
  placeId?: string;
  placeName?: string;
  accuracy?: number;
}

// Chat Room Types
export interface ChatRoom {
  id: string;
  name: string;
  description?: string;
  avatar?: string;
  type: 'public' | 'private' | 'topic' | 'location' | 'event';
  category: string;
  tags: string[];
  participants: ChatRoomParticipant[];
  messages: Message[];
  maxParticipants?: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  settings: ChatRoomSettings;
  moderation: ModerationSettings;
}

export interface ChatRoomParticipant {
  userId: string;
  user: User;
  role: 'owner' | 'moderator' | 'member';
  joinedAt: Date;
  lastActiveAt: Date;
  isBanned: boolean;
  isMuted: boolean;
  muteUntil?: Date;
}

export interface ChatRoomSettings {
  allowImages: boolean;
  allowVideos: boolean;
  allowFiles: boolean;
  allowLinks: boolean;
  slowMode: boolean;
  slowModeDelay?: number;
  requireApproval: boolean;
  autoModeration: boolean;
  language: string;
  welcomeMessage?: string;
}

export interface ModerationSettings {
  autoDeleteSpam: boolean;
  autoMuteProfanity: boolean;
  maxMessageLength: number;
  bannedWords: string[];
  allowedDomains: string[];
  rateLimiting: boolean;
  maxMessagesPerMinute: number;
}

// Notification Types
export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  data: NotificationData;
  read: boolean;
  clicked: boolean;
  createdAt: Date;
  expiresAt?: Date;
  priority: 'low' | 'normal' | 'high' | 'urgent';
  category: string;
  actions?: NotificationAction[];
}

export type NotificationType = 
  | 'like' 
  | 'comment' 
  | 'mention' 
  | 'follow' 
  | 'message' 
  | 'friend_request' 
  | 'group_invite' 
  | 'event_invite' 
  | 'live_stream' 
  | 'achievement' 
  | 'system' 
  | 'promotion';

export interface NotificationData {
  postId?: string;
  userId?: string;
  conversationId?: string;
  eventId?: string;
  achievementId?: string;
  url?: string;
  imageUrl?: string;
  [key: string]: any;
}

export interface NotificationAction {
  id: string;
  label: string;
  action: string;
  style: 'default' | 'destructive';
}

// AI Types
export interface AIAssistant {
  id: string;
  name: string;
  personality: AIPersonality;
  capabilities: AICapability[];
  language: string;
  voiceId?: string;
  avatar?: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  settings: AISettings;
  memory: AIMemory[];
}

export interface AIPersonality {
  traits: string[];
  tone: 'formal' | 'casual' | 'friendly' | 'professional' | 'humorous';
  expertise: string[];
  interests: string[];
  communicationStyle: string;
}

export type AICapability = 
  | 'text_generation' 
  | 'image_generation' 
  | 'video_generation' 
  | 'audio_generation' 
  | 'translation' 
  | 'summarization' 
  | 'analysis' 
  | 'coding' 
  | 'creative_writing' 
  | 'data_analysis';

export interface AISettings {
  creativity: number;
  formality: number;
  verbosity: number;
  factualness: number;
  empathy: number;
  humor: number;
}

export interface AIMemory {
  id: string;
  type: 'fact' | 'preference' | 'interaction' | 'context';
  content: string;
  importance: number;
  createdAt: Date;
  lastAccessedAt: Date;
  tags: string[];
}

// Payment Types
export interface Wallet {
  id: string;
  userId: string;
  balances: WalletBalance[];
  transactions: Transaction[];
  paymentMethods: PaymentMethod[];
  createdAt: Date;
  updatedAt: Date;
}

export interface WalletBalance {
  currency: string;
  amount: number;
  locked: number;
  available: number;
}

export interface Transaction {
  id: string;
  walletId: string;
  type: 'credit' | 'debit';
  category: TransactionCategory;
  amount: number;
  currency: string;
  description: string;
  status: 'pending' | 'completed' | 'failed' | 'cancelled';
  fromUserId?: string;
  toUserId?: string;
  metadata: TransactionMetadata;
  createdAt: Date;
  completedAt?: Date;
}

export type TransactionCategory = 
  | 'tip' 
  | 'subscription' 
  | 'purchase' 
  | 'reward' 
  | 'refund' 
  | 'withdrawal' 
  | 'deposit' 
  | 'fee' 
  | 'donation' 
  | 'nft';

export interface TransactionMetadata {
  postId?: string;
  productId?: string;
  subscriptionId?: string;
  nftId?: string;
  paymentMethodId?: string;
  externalTransactionId?: string;
  [key: string]: any;
}

export interface PaymentMethod {
  id: string;
  type: 'card' | 'bank' | 'crypto' | 'digital_wallet';
  provider: string;
  last4?: string;
  expiryMonth?: number;
  expiryYear?: number;
  brand?: string;
  isDefault: boolean;
  isVerified: boolean;
  createdAt: Date;
}

// NFT Types
export interface NFT {
  id: string;
  tokenId: string;
  contractAddress: string;
  blockchain: 'ethereum' | 'polygon' | 'solana' | 'binance';
  name: string;
  description: string;
  image: string;
  animationUrl?: string;
  attributes: NFTAttribute[];
  creator: string;
  owner: string;
  price?: number;
  currency?: string;
  rarity?: string;
  collection?: NFTCollection;
  metadata: NFTMetadata;
  createdAt: Date;
  updatedAt: Date;
}

export interface NFTAttribute {
  trait_type: string;
  value: string | number;
  display_type?: string;
  max_value?: number;
}

export interface NFTCollection {
  id: string;
  name: string;
  description: string;
  image: string;
  slug: string;
  contractAddress: string;
  blockchain: string;
  totalSupply: number;
  floorPrice?: number;
  volume?: number;
  createdAt: Date;
}

export interface NFTMetadata {
  standard: 'ERC-721' | 'ERC-1155';
  royalties: number;
  ipfsHash?: string;
  externalUrl?: string;
  backgroundColor?: string;
  youtubeUrl?: string;
  [key: string]: any;
}

// Common Types
export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: APIError;
  pagination?: Pagination;
  meta?: Record<string, any>;
}

export interface APIError {
  code: string;
  message: string;
  details?: Record<string, any>;
  timestamp: Date;
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface SearchResult<T = any> {
  items: T[];
  total: number;
  query: string;
  filters: Record<string, any>;
  suggestions: string[];
  facets: SearchFacet[];
}

export interface SearchFacet {
  name: string;
  values: SearchFacetValue[];
}

export interface SearchFacetValue {
  value: string;
  count: number;
  selected: boolean;
}

// Chat Message for Live Streams
export interface ChatMessage {
  id: string;
  userId: string;
  user: User;
  message: string;
  timestamp: Date;
  type: 'message' | 'emoji' | 'gift' | 'system';
  metadata?: Record<string, any>;
}

// Export all types
export * from './auth';
export * from './api';
export * from './events';