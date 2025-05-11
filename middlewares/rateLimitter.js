import rateLimit from 'express-rate-limit';

const commonOptions = {
  standardHeaders: true,
  legacyHeaders: true    
};

export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: 'Too many login/signup attempts. Please try again later.',
  ...commonOptions
});

export const profileLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 20,
  message: 'Too many profile requests from this IP, please try again later.',
  ...commonOptions
});

export const dataWriteLimiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 15,
  message: 'Too many data modification requests. Please slow down.',
  ...commonOptions
});

export const publicLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 60,
  message: 'Too many public data requests. Please slow down.',
  ...commonOptions
});

export const globalLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 100,
  message: 'Too many total requests. Please slow down.',
  ...commonOptions
});
