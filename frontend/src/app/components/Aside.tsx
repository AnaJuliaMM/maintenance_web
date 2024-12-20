import React from "react";
import Image from "next/image";

import { GoTools } from "react-icons/go";
import { LuWarehouse } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";
import { PiWashingMachine } from "react-icons/pi";
import { FaUsers } from "react-icons/fa";
import { IoIosListBox } from "react-icons/io";
import { MdAttachMoney } from "react-icons/md";
import { GoGraph } from "react-icons/go";

import { NavIconItem } from "./NavIconItem";
import { NavIconItemProps } from "./NavIconItem";

export const Aside = () => {
  const navItems: NavIconItemProps[] = [
    {
      value: "Relatório",
      href: "/",
      icon: <GoGraph />,
    },
    {
      value: "Máquinas",
      href: "/machines",
      icon: <PiWashingMachine />,
    },
    {
      value: "Manutenções",
      href: "/maintenances",
      icon: <IoIosListBox />,
    },
    {
      value: "Despesas",
      href: "/expenses",
      icon: <MdAttachMoney />,
    },
    {
      value: "Estoque",
      href: "/stock",
      icon: <LuWarehouse />,
    },
    {
      value: "Equipes",
      href: "/teams",
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
