"use client";
import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/context/authContext";
import { userRole } from "@/types/authType";

interface ProtectedRouteProps {
  children: ReactNode;
  requiredRole: userRole[];
}

const ProtectedRoute = ({ children, requiredRole }: ProtectedRouteProps) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!requiredRole.includes(user.role)) {
      router.push("/");
    }
  }, [user, requiredRole, router]);

  if (!requiredRole.includes(user.role)) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
