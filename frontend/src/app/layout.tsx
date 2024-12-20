import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Aside } from "./components/Aside";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Controle de Manutenção",
  description:
    "Sistema para controle e gerenciamento de manutenções em uma indústria",
};

export default function RootLayout({
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
