import validator from 'validator';

/**
 * Email validation
 */
export const isValidEmail = (email: string): boolean => {
  return validator.isEmail(email);
};

/**
 * Phone number validation
 */
export const isValidPhone = (phone: string): boolean => {
  return validator.isMobilePhone(phone);
};

/**
 * URL validation
 */
export const isValidUrl = (url: string): boolean => {
  return validator.isURL(url);
};

/**
 * Strong password validation
 */
export const isStrongPassword = (password: string): boolean => {
  return validator.isStrongPassword(password, {
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1
  });
};

/**
 * Username validation
 */
export const isValidUsername = (username: string): boolean => {
  const usernameRegex = /^[a-zA-Z0-9_]{3,30}$/;
  return usernameRegex.test(username);
};

/**
 * Credit card validation
 */
export const isValidCreditCard = (cardNumber: string): boolean => {
  return validator.isCreditCard(cardNumber);
};

/**
 * JWT token validation
 */
export const isValidJWT = (token: string): boolean => {
  return validator.isJWT(token);
};

/**
 * UUID validation
 */
export const isValidUUID = (uuid: string): boolean => {
  return validator.isUUID(uuid);
};

/**
 * Arabic text validation
 */
export const isArabicText = (text: string): boolean => {
  const arabicRegex = /[\u0600-\u06FF\u0750-\u077F]/;
  return arabicRegex.test(text);
};

/**
 * File extension validation
 */
export const isValidFileExtension = (filename: string, allowedExtensions: string[]): boolean => {
  const extension = filename.split('.').pop()?.toLowerCase();
  return extension ? allowedExtensions.includes(extension) : false;
};

/**
 * Image file validation
 */
export const isImageFile = (filename: string): boolean => {
  const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'bmp'];
  return isValidFileExtension(filename, imageExtensions);
};

/**
 * Video file validation
 */
export const isVideoFile = (filename: string): boolean => {
  const videoExtensions = ['mp4', 'avi', 'mov', 'wmv', 'flv', 'webm', 'mkv'];
  return isValidFileExtension(filename, videoExtensions);
};

/**
 * Audio file validation
 */
export const isAudioFile = (filename: string): boolean => {
  const audioExtensions = ['mp3', 'wav', 'ogg', 'aac', 'flac', 'm4a'];
  return isValidFileExtension(filename, audioExtensions);
};