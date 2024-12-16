"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

import { authType, JwtPayloadType } from "@/types/authType";

import AuthService from "@/services/auth";

interface AuthContextType {
  user: JwtPayloadType;
  login: (role: authType) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const storedUser = localStorage.getItem("user");

  const [user, setUser] = useState<JwtPayloadType>(
    storedUser ? JSON.parse(storedUser) : { username: "", role: null }
  );

  const login = async (data: authType) => {
    try {
      const { jwtPayload } = await AuthService.login("", data);
      setUser(jwtPayload);

      localStorage.setItem("user", JSON.stringify(jwtPayload));
    } catch (error) {
      console.error("Erro ao realizar login:", error);
    }
  };

  const logout = async () => {
    await AuthService.logout();
    setUser({ username: "", role: null });
    localStorage.removeItem("user");
  };

  useEffect(() => {
    if (user.username && user.role !== null) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

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
