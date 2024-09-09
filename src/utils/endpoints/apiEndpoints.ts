export const apiEndpoints = {
  login: '/auth/login',
  register: '/auth/signup',
  confirmSignup: '/auth/confirm-signup',
  getSales: '/sales',
  editSales: (id: string, includeProductsPurchased = false) => {
    if (includeProductsPurchased) {
      return `/sales/${id}?includeProductsPurchased=true`;
    }
    return `/sales/${id}`;
  },
};
