"use client";
import { usePathname } from "next/navigation";
import "./globals.css";

import { Aside } from "@/components/Aside";

import { AuthProvider } from "@/context/authContext";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isLoginRoute = pathname === "/";

  return (
    <AuthProvider>
      <html lang="en">
        <body className="bg-gray-950 h-svh">
          {/*Do not show aside nav in login route*/}
          {!isLoginRoute && <Aside />}
          <div className={`flex h-svh ${!isLoginRoute && "pl-[20%]"}`}>
            {children}
          </div>
        </body>
      </html>
    </AuthProvider>
  );
}
