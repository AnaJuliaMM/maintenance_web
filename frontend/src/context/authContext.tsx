"use client";
import { createContext, useContext, useState, ReactNode } from "react";

import { UserRole } from "@/types/userType";
import { authType } from "@/types/authType";

import AuthService from "@/services/auth";

interface AuthContextType {
  userRole: UserRole;
  login: (role: authType) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userRole, setUserRole] = useState<UserRole>(null);

  const login = async (data: authType) => {
    try {
      const { role } = await AuthService.login("", data);
      console.log("Dentro do Context: " + role);

      setUserRole(role);
    } catch (error) {
      console.error("Erro ao realizar login:", error);
    }
  };

  const logout = async () => {
    await AuthService.logout();
    setUserRole(null);
  };

  return (
    <AuthContext.Provider value={{ userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
