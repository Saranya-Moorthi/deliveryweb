import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (mobile: string, otp: string) => Promise<boolean>;
  register: (userData: Omit<User, 'id'>) => Promise<boolean>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
  isLoginOpen: boolean;
  setIsLoginOpen: (isOpen: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const login = async (mobile: string, otp: string): Promise<boolean> => {
    // For now, we'll simulate OTP verification (always successful)
    // In a real app, this would verify the OTP with backend
    
    // Check if user exists in localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const existingUser = existingUsers.find((u: User) => u.mobile === mobile);
    
    if (existingUser) {
      setUser(existingUser);
      localStorage.setItem('currentUser', JSON.stringify(existingUser));
      return true;
    }
    
    return false;
  };

  const register = async (userData: Omit<User, 'id'>): Promise<boolean> => {
    const newUser: User = {
      ...userData,
      id: Date.now().toString(),
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(userData.name)}&background=8B4513&color=fff&size=128`
    };
    
    // Save to localStorage (in a real app, this would be saved to backend)
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    
    setUser(newUser);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
  };

  const updateUser = (userData: Partial<User>) => {
    if (!user) return;
    
    const updatedUser = { ...user, ...userData };
    setUser(updatedUser);
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    
    // Update in users array
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const updatedUsers = existingUsers.map((u: User) => 
      u.id === user.id ? updatedUser : u
    );
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  // Load user from localStorage on mount
  React.useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const value = {
    user,
    login,
    register,
    logout,
    updateUser,
    isLoginOpen,
    setIsLoginOpen
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};