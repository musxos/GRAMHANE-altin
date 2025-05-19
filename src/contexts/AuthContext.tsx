import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  username: string;
  branchName: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

interface AuthContextType {
  authState: AuthState;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>(() => {
    const savedState = localStorage.getItem('authState');
    if (savedState) {
      return JSON.parse(savedState);
    }
    return {
      isAuthenticated: false,
      user: null,
    };
  });

  useEffect(() => {
    localStorage.setItem('authState', JSON.stringify(authState));
  }, [authState]);

  const login = async (username: string, password: string) => {
    // Demo giriş işlemi
    if (username === 'demo1' && password === 'demo1') {
      setAuthState({
        isAuthenticated: true,
        user: {
          id: '1',
          username: 'Demo Kullanıcı',
          branchName: 'Merkez Şube',
        },
      });
    } else {
      throw new Error('Geçersiz kullanıcı adı veya şifre');
    }
  };

  const logout = () => {
    setAuthState({
      isAuthenticated: false,
      user: null,
    });
    localStorage.removeItem('authState');
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}