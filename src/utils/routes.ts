export const routes = {
  login: '/login',
  register: '/register',
  confirmSignup: '/confirm-signup',
  home: '/home',
  sales: '/sales',
  dashboard: '/dashboard',
  products: '/products',
  categories: '/categories',
  editSales: (id?: string) => `/sales/${id ? id : ':id'}`,
};
