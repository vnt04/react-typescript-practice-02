export const isAuthenticated = (): boolean => {
  return sessionStorage.getItem("token") !== null;
};
