import React from "react";
import Image from "next/image";

import { GoTools } from "react-icons/go";
import { LuWarehouse } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";
import { PiWashingMachine } from "react-icons/pi";
import { FaUsers } from "react-icons/fa";
import { IoIosListBox } from "react-icons/io";

import { NavIconItem } from "./NavIconItem";
import { NavIconItemProps } from "./NavIconItem";

export const Aside = () => {
  const navItems: NavIconItemProps[] = [
    {
      value: "Máquinas",
      href: "/machines",
      icon: <PiWashingMachine />,
    },
    {
      value: "Ambientes",
      href: "/",
      icon: <LuWarehouse />,
    },
    {
      value: "Equipamentos",
      href: "/",
      icon: <GoTools />,
    },
    {
      value: "Manutenções",
      href: "/",
      icon: <IoIosListBox />,
    },
    {
      value: "Usuários",
      href: "/",
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
