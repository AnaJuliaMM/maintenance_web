import React from "react";

import { IoAddCircle } from "react-icons/io5";

interface CreateButtonProps {
  text: string;
  onClick: () => void;
}

export default function CreateButton({ text, onClick }: CreateButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex gap-2 justify-center items-center bg-blue-500 py-2 px-4 rounded-lg font-semibold text-sm"
    >
      <IoAddCircle size={20} />
      {text}
    </button>
  );
}
