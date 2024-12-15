"use client";
import { createContext, useContext, useState, ReactNode } from "react";

import { authType, JwtPayloadType } from "@/types/authType";

import AuthService from "@/services/auth";

interface AuthContextType {
  user: JwtPayloadType;
  login: (role: authType) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<JwtPayloadType>({
    username: "",
    role: null,
  });

  const login = async (data: authType) => {
    try {
      const { jwtPayload } = await AuthService.login("", data);
      setUser(jwtPayload);
    } catch (error) {
      console.error("Erro ao realizar login:", error);
    }
  };

  const logout = async () => {
    await AuthService.logout();
    setUser({ username: "", role: null });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
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
