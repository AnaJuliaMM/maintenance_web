import type { Metadata } from "next";
import { Aside } from "@/components/Aside";

import "./globals.css";

export const metadata: Metadata = {
  title: "Controle de Manutenção",
  description:
    "Sistema para controle e gerenciamento de manutenções em uma indústria",
};

export default function ServerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-950 h-svh">
        <Aside />
        <div className="flex h-svh pl-[20%]">{children}</div>
      </body>
    </html>
  );
}
