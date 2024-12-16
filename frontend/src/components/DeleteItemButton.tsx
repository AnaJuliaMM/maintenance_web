import React from "react";

import { TiDelete } from "react-icons/ti";

interface DeleteItemButtonProps {
  text: string;
  onClick: () => void;
}

export default function DeleteItemButton({ text, onClick }: DeleteItemButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-evenly gap-4 bg-slate-400 w-fit h-fit py-2 px-4 rounded-lg text-sm"
    >
      {text} <TiDelete size={20} />
    </button>
  );
}
