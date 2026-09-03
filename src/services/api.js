const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

/**
 * Universal fetch wrapper for Tepito API
 */
export async function apiRequest(endpoint, options = {}) {
  const token = localStorage.getItem('tepito_auth_token');
  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(options.headers || {}),
  };

  try {
    const url = endpoint.startsWith('http') ? endpoint : `${API_BASE_URL}${endpoint}`;
    const response = await fetch(url, {
      ...options,
      headers,
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(data.message || `HTTP Error ${response.status}`);
    }

    return data;
  } catch (error) {
    console.warn(`API Error [${endpoint}]:`, error.message);
    throw error;
  }
}

// Dedicated API service methods
export const api = {
  // Auth
  login: (credentials) => apiRequest('/auth/login', { method: 'POST', body: JSON.stringify(credentials) }),
  register: (userData) => apiRequest('/auth/register', { method: 'POST', body: JSON.stringify(userData) }),
  forgotPassword: (email) => apiRequest('/auth/forgot-password', { method: 'POST', body: JSON.stringify({ email }) }),
  resetPassword: (payload) => apiRequest('/auth/reset-password', { method: 'POST', body: JSON.stringify(payload) }),
  getProfile: () => apiRequest('/auth/me'),
  updateProfile: (profileData) => apiRequest('/auth/profile', { method: 'PUT', body: JSON.stringify(profileData) }),

  // Dynamic CMS & Global Config
  getSettings: () => apiRequest('/settings'),
  updateSettings: (settings) => apiRequest('/settings', { method: 'PUT', body: JSON.stringify(settings) }),
  getHeader: () => apiRequest('/header/header'),
  updateHeader: (header) => apiRequest('/header/header', { method: 'PUT', body: JSON.stringify(header) }),
  getFooter: () => apiRequest('/footer/footer'),
  updateFooter: (footer) => apiRequest('/footer/footer', { method: 'PUT', body: JSON.stringify(footer) }),
  getPageContent: (slug) => apiRequest(`/pages/${slug}`),
  updatePageContent: (slug, content) => apiRequest(`/pages/${slug}`, { method: 'PUT', body: JSON.stringify(content) }),

  // Services Catalog
  getServices: () => apiRequest('/services'),
  getServiceBySlug: (slug) => apiRequest(`/services/${slug}`),
  createService: (serviceData) => apiRequest('/services', { method: 'POST', body: JSON.stringify(serviceData) }),
  updateService: (id, serviceData) => apiRequest(`/services/${id}`, { method: 'PUT', body: JSON.stringify(serviceData) }),
  deleteService: (id) => apiRequest(`/services/${id}`, { method: 'DELETE' }),

  // Products Catalog
  getProducts: (params = '') => apiRequest(`/products${params ? `?${params}` : ''}`),
  getProductById: (id) => apiRequest(`/products/${id}`),
  createProduct: (productData) => apiRequest('/products', { method: 'POST', body: JSON.stringify(productData) }),
  updateProduct: (id, productData) => apiRequest(`/products/${id}`, { method: 'PUT', body: JSON.stringify(productData) }),
  deleteProduct: (id) => apiRequest(`/products/${id}`, { method: 'DELETE' }),

  // Bookings & Dispatches
  createBooking: (bookingData) => apiRequest('/bookings', { method: 'POST', body: JSON.stringify(bookingData) }),
  getBookingByRef: (ref) => apiRequest(`/bookings/${ref}`),
  getMyBookings: () => apiRequest('/bookings/my-bookings'),

  // Leads & Inquiries
  createLead: (leadData) => apiRequest('/leads', { method: 'POST', body: JSON.stringify(leadData) }),
  getLeads: (query = '') => apiRequest(`/leads${query ? `?${query}` : ''}`),
  updateLead: (id, data) => apiRequest(`/leads/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  deleteLead: (id) => apiRequest(`/leads/${id}`, { method: 'DELETE' }),

  // Partner Onboarding & Applications
  applyPartner: (data) => apiRequest('/partner/apply', { method: 'POST', body: JSON.stringify(data) }),
  getPartnerApplications: () => apiRequest('/partner/applications'),

  // Careers & Job Applications
  applyCareer: (data) => apiRequest('/careers/apply', { method: 'POST', body: JSON.stringify(data) }),
  getJobApplications: () => apiRequest('/careers/applications'),

  // Contact Inquiries
  submitContact: (data) => apiRequest('/contact', { method: 'POST', body: JSON.stringify(data) }),
  getContactMessages: () => apiRequest('/contact/messages'),

  // Testimonials & FAQs
  getTestimonials: () => apiRequest('/testimonials'),
  createTestimonial: (data) => apiRequest('/testimonials', { method: 'POST', body: JSON.stringify(data) }),
  updateTestimonial: (id, data) => apiRequest(`/testimonials/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  deleteTestimonial: (id) => apiRequest(`/testimonials/${id}`, { method: 'DELETE' }),

  getFAQs: (category = '') => apiRequest(`/faqs${category ? `?category=${category}` : ''}`),
  createFAQ: (data) => apiRequest('/faqs', { method: 'POST', body: JSON.stringify(data) }),
  updateFAQ: (id, data) => apiRequest(`/faqs/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  deleteFAQ: (id) => apiRequest(`/faqs/${id}`, { method: 'DELETE' }),

  // Admin Dashboard Overview & Backup
  getAdminStats: () => apiRequest('/admin/dashboard'),
  exportBackup: () => apiRequest('/admin/backup'),
  restoreBackup: (data) => apiRequest('/admin/restore', { method: 'POST', body: JSON.stringify(data) }),
};
