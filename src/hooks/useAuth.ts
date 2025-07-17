import { useState, useEffect } from "react";

const AUTH_TOKEN_KEY = "admin_auth_token";
const AUTH_EXPIRY_KEY = "admin_auth_expiry";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = () => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    const expiry = localStorage.getItem(AUTH_EXPIRY_KEY);

    if (token && expiry) {
      const expiryTime = parseInt(expiry);
      const currentTime = Date.now();

      if (currentTime < expiryTime) {
        setIsAuthenticated(true);
        return true;
      } else {
        logout();
      }
    }

    setIsAuthenticated(false);
    return false;
  };

  const login = (password: string): boolean => {
    if (password === "admin123") {
      const expiryTime = Date.now() + 7 * 60 * 60 * 1000; // 7 horas
      localStorage.setItem(AUTH_TOKEN_KEY, "authenticated");
      localStorage.setItem(AUTH_EXPIRY_KEY, expiryTime.toString());
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(AUTH_EXPIRY_KEY);
    setIsAuthenticated(false);
  };

  return {
    isAuthenticated,
    login,
    logout,
    checkAuthentication,
  };
};
