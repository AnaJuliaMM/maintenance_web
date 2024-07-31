import React from "react";
import Image from "next/image";

import { GoTools } from "react-icons/go";
import { LuWarehouse } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";
import { FaUsers } from "react-icons/fa";
import { IoIosListBox } from "react-icons/io";

import { NavIconItem } from "./NavIconItem";
import { NavIconItemProps } from "./NavIconItem";

export const Aside = () => {
  const navItems: NavIconItemProps[] = [
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
    <aside className="w-64 p-6 bg-gray-950/35">
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
