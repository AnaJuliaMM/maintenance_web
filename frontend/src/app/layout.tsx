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
      <body className="bg-gray-900  flex flex-col h-full">
        <div className="flex-1 flex">
          <Aside />
          {children}
        </div>
        <footer className="p-6 h-30 text-center fixed bottom-0 w-full bg-gray-950">
          Todos os direitos reservados &copy; 2024
        </footer>
      </body>
    </html>
  );
}
