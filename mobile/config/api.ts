// API Configuration
export const API_CONFIG = {
  BASE_URL: 'https://supreme-space-palm-tree-5w4wj7r9g4434rx4-5000.app.github.dev',
  ENDPOINTS: {
    LOGIN: '/api/auth/login',
    VERIFY_MFA: '/api/auth/verify-mfa',
    GENERATE_MFA: '/api/auth/generate-mfa-secret',
    CARDS: '/api/cards/',
    TRANSACTIONS: '/api/transactions/',
    BILLS: '/api/bills',
    PAY_BILL: '/api/bills/pay',
    ANALYTICS: '/api/analytics/spending',
    PROFILE: '/api/users/profile',
  },
  HEADERS: {
    'Content-Type': 'application/json',
  },
};