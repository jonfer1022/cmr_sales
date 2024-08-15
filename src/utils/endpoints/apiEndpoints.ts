export const apiEndpoints = {
  login: '/auth/login',
  register: '/auth/signup',
  confirmSignup: '/auth/confirm-signup',
  getSales: '/sales',
  editSales: (id: string) => `/sales/${id}`,
};
