import Link from "next/link";
import React from "react";

export type NavIconItemProps = {
  value: string;
  href: string;
  icon: React.ReactNode;
};

export const NavIconItem: React.FC<NavIconItemProps> = ({
  value,
  href,
  icon,
}) => {
  return (
    <Link href={href} className="flex items-center gap-2 hover:font-semibold">
      {icon}
      {value}
    </Link>
  );
};
