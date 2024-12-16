import React from "react";

import { IoAddCircle } from "react-icons/io5";

interface HeaderProps {
  title: string;
  buttonText: string;
  onClick: () => void;
}

export default function Header({ title, buttonText, onClick }: HeaderProps) {
  return (
    <header className="flex  justify-between p-5">
      <h1 className="text-blue-100 text-2xl font-bold">{title}</h1>
      <div className="flex gap-4">
        <button
          onClick={onClick}
          className="flex gap-2 justify-center items-center bg-blue-500 py-2 px-4 rounded-lg font-semibold text-sm"
        >
          <IoAddCircle size={20} />
          {buttonText}
        </button>
      </div>
    </header>
  );
}
