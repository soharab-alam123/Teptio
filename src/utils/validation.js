/**
 * Robust Form Validation Utilities for Tepito
 * Enforces strict character-only names, 10-digit numeric phones, and valid emails.
 */

// Name: Letters and spaces only (min 2 characters, no numbers or special symbols)
export const validateName = (name, required = true) => {
  if (!name || !name.trim()) {
    return required ? 'Full name is required' : '';
  }
  const clean = name.trim();
  if (!/^[A-Za-z\s.'-]+$/.test(clean)) {
    return 'Name can only contain alphabetic letters (no numbers or special symbols)';
  }
  if (clean.length < 2) {
    return 'Name must be at least 2 characters long';
  }
  return '';
};

// Phone: Exactly 10 digits starting with 6, 7, 8, or 9
export const validatePhone = (phone, required = true) => {
  if (!phone || !phone.trim()) {
    return required ? 'Contact phone number is required' : '';
  }
  const clean = phone.replace(/\D/g, '');
  if (!/^[6-9]\d{9}$/.test(clean)) {
    return 'Please enter a valid 10-digit mobile number (starts with 6-9)';
  }
  return '';
};

// Email: Standard RFC email format
export const validateEmail = (email, required = true) => {
  if (!email || !email.trim()) {
    return required ? 'Email address is required' : '';
  }
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email.trim())) {
    return 'Please enter a valid email address (e.g. name@example.com)';
  }
  return '';
};

// Live Input Sanitizers (prevents entering invalid characters in real-time)
export const filterNameInput = (value) => {
  // Only allow letters, spaces, apostrophes, dots, and hyphens
  return value.replace(/[^a-zA-Z\s.'-]/g, '');
};

export const filterPhoneInput = (value) => {
  // Only allow digits, max 10 characters
  return value.replace(/\D/g, '').slice(0, 10);
};
