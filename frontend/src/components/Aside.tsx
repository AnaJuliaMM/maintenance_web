import React from "react";
import Image from "next/image";

import { LuWarehouse } from "react-icons/lu";
import { PiWashingMachine } from "react-icons/pi";
import { IoIosListBox } from "react-icons/io";
import { BsFileEarmarkBarGraph } from "react-icons/bs";

import { NavIconItem } from "./NavIconItem";

import { useAuth } from "@/context/authContext";

export const Aside = () => {
  const { user, logout } = useAuth();

  const navItems = [
    {
      value: "Relatório",
      href: "/report",
      icon: <BsFileEarmarkBarGraph />,
    },
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
        {navItems
          .filter((item) =>
            item.href === "/users" ? user.role === "user:admin" : true
          )
          .map((item, index) => (
            <NavIconItem
              href={item.href}
              icon={item.icon}
              value={item.value}
              key={index}
            />
          ))}
      </nav>

      <div>
        <div className="flex flex-col py-4">
          <p>
            <span className="font-semibold">Usuário:</span>{" "}
            {user.username || "-"}
          </p>
          <p>
            <span className="font-semibold">Papel:</span> {user.role || "-"}
          </p>
        </div>

        <button
          onClick={logout}
          className="flex justify-center gap-2 self-end  bg-blue-500 rounded-md font-semibold text-sm w-full py-2"
        >
          Sair
        </button>
      </div>
    </aside>
  );
};
