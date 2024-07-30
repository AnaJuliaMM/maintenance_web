import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { GoTools } from "react-icons/go";
import { LuWarehouse } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";
import { FaUsers } from "react-icons/fa";
import { IoIosListBox } from "react-icons/io";

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
  const navItems = [
    {
      value: "Dashboards",
      href: "",
      icon: <RxDashboard />,
    },
    {
      value: "Ambientes",
      href: "",
      icon: <LuWarehouse />,
    },
    {
      value: "Equipamentos",
      href: "",
      icon: <GoTools />,
    },
    {
      value: "Manutenções",
      href: "",
      icon: <IoIosListBox />,
    },
    {
      value: "Usuários",
      href: "",
      icon: <FaUsers />,
    },
  ];

  return (
    <html lang="en">
      <body className="bg-gray-900 h-screen flex flex-col">
        <div className="flex-1 flex">
          <Aside navItems={navItems} />
          {children}
        </div>
        <footer className="p-6  text-center">
          Todos os direitos reservados &copy; 2024
        </footer>
      </body>
    </html>
  );
}
