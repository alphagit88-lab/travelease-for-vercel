'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Route } from '@/routers/types';
import { api } from '@/utils/api';

interface AdminUser {
  id: number;
  name: string;
  email: string;
  role: 'admin';
}

interface AdminAuthContextType {
  admin: AdminUser | null;
  token: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

export function AdminAuthProvider({ children }: { children: React.ReactNode }) {
  const [admin, setAdmin] = useState<AdminUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem('admin_token');
    const storedAdmin = localStorage.getItem('admin_user');
    
    if (storedToken && storedAdmin) {
      setToken(storedToken);
      try {
        setAdmin(JSON.parse(storedAdmin));
      } catch (e) {
        console.error("Error parsing admin user", e);
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await api.post<{ user: AdminUser; token: string }>('/admin/login', {
        email,
        password,
      });

      if (response.success && response.data) {
        setAdmin(response.data.user);
        setToken(response.data.token);
        localStorage.setItem('admin_token', response.data.token);
        localStorage.setItem('admin_user', JSON.stringify(response.data.user));
        return { success: true };
      } else {
        return { success: false, message: response.message || 'Login failed' };
      }
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Login failed',
      };
    }
  };

  const logout = () => {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_user');
    setToken(null);
    setAdmin(null);
    router.push('/admin/login' as Route<string>);
  };

  return (
    <AdminAuthContext.Provider value={{ admin, token, loading, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);
  if (context === undefined) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
}
