import React from "react";
import Image from "next/image";

import { LuWarehouse } from "react-icons/lu";
import { PiWashingMachine } from "react-icons/pi";
import { IoIosListBox } from "react-icons/io";

import { NavIconItem } from "./NavIconItem";

import { useAuth } from "@/context/authContext";

export const Aside = () => {
  const { logout } = useAuth();

  const navItems = [
    {
      value: "Máquinas",
      href: "/machines",
      icon: <PiWashingMachine />,
    },
    {
      value: "Estoque",
      href: "/stock",
      icon: <LuWarehouse />,
    },
    {
      value: "Manutenções",
      href: "/maintenances",
      icon: <IoIosListBox />,
    },
    {
      value: "Usuários",
      href: "/users",
      icon: <IoIosListBox />,
    },
  ];

  return (
    <aside className="flex flex-col justify-between w-1/5 p-6 bg-gray-900/35 fixed h-svh">
      <nav className="flex flex-col space-y-4 mt-8">
        <Image
          src={"/image/logo.svg"}
          alt="Logo"
          width={200}
          height={200}
          className="w-full"
        ></Image>
        {navItems.map((item, index) => (
          <NavIconItem
            href={item.href}
            icon={item.icon}
            value={item.value}
            key={index}
          />
        ))}
      </nav>

      <button
        onClick={logout}
        className="flex justify-center gap-2 self-end  bg-blue-500 rounded-md font-semibold text-sm w-full py-2"
      >
        Sair
      </button>
    </aside>
  );
};
