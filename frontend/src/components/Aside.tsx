import React from "react";
import Image from "next/image";

import { LuWarehouse } from "react-icons/lu";
import { PiWashingMachine } from "react-icons/pi";
import { FaUsers } from "react-icons/fa";
import { IoIosListBox } from "react-icons/io";

import { NavIconItem } from "./NavIconItem";

export const Aside = () => {
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
      icon: <FaUsers />,
    },
  ];

  return (
    <aside className="w-1/5 p-6 bg-gray-900/35 fixed h-svh">
      <Image
        src={"/image/logo.svg"}
        alt="Logo"
        width={200}
        height={200}
        className="w-full"
        priority
      ></Image>
      <nav className="flex flex-col space-y-4 mt-8">
        {navItems.map((item, index) => (
          <NavIconItem
            href={item.href}
            icon={item.icon}
            value={item.value}
            key={index}
          />
        ))}
      </nav>
    </aside>
  );
};
