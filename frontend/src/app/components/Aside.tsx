import React from "react";
import Image from "next/image";

import { NavIconItem } from "./NavIconItem";
import { NavIconItemProps } from "./NavIconItem";

type AsideProps = {
  navItems: NavIconItemProps[];
};

export const Aside: React.FC<AsideProps> = ({ navItems }) => {
  return (
    <aside className="w-64 p-6 bg-gray-950/35">
      <Image
        src={"/image/image.png"}
        alt="Logo"
        width={300}
        height={300}
        className="w-full"
      ></Image>
      <nav className="flex flex-col space-y-4 mt-8">
        {navItems.map((item) => (
          <NavIconItem href={item.href} icon={item.icon} value={item.value} />
        ))}
      </nav>
    </aside>
  );
};
