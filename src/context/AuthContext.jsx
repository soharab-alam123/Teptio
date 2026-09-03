import React, { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem('tepito_auth_token') || '');
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('tepito_user');
    if (savedUser) {
      try {
        return JSON.parse(savedUser);
      } catch (e) {}
    }
    return null;
  });
  const [loading, setLoading] = useState(!user);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const res = await api.getProfile();
        if (res.success && res.data) {
          setUser(res.data);
          localStorage.setItem('tepito_user', JSON.stringify(res.data));
        }
      } catch (err) {
        console.warn('Failed to load user session:', err.message);
        localStorage.removeItem('tepito_auth_token');
        localStorage.removeItem('tepito_user');
        setToken('');
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentUser();
  }, [token]);

  const login = async (email, password) => {
    const res = await api.login({ email, password });
    if (res.success && res.data?.token) {
      localStorage.setItem('tepito_auth_token', res.data.token);
      localStorage.setItem('tepito_user', JSON.stringify(res.data));
      setToken(res.data.token);
      setUser(res.data);
      return res.data;
    }
    throw new Error(res.message || 'Login failed');
  };

  const register = async (userData) => {
    const res = await api.register(userData);
    if (res.success && res.data?.token) {
      localStorage.setItem('tepito_auth_token', res.data.token);
      localStorage.setItem('tepito_user', JSON.stringify(res.data));
      setToken(res.data.token);
      setUser(res.data);
      return res.data;
    }
    throw new Error(res.message || 'Registration failed');
  };

  const logout = () => {
    localStorage.removeItem('tepito_auth_token');
    localStorage.removeItem('tepito_user');
    setToken('');
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        isAuthenticated: !!user,
        isAdmin: user?.role === 'admin',
        login,
        register,
        logout,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
