"use client";
import { usePathname } from "next/navigation";
import { Aside } from "@/components/Aside";

import "./globals.css";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isLoginRoute = pathname === "/";

  return (
    <html lang="en">
      <body className="bg-gray-950 h-svh">
        {/* Exibe o Aside com base na lógica de rota */}
        {!isLoginRoute && <Aside />}
        <div className={`flex h-svh ${!isLoginRoute && "pl-[20%]"}`}>
          {children}
        </div>
      </body>
    </html>
  );
}
