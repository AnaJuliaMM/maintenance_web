import React from "react";

interface MachineInfoProps {
  label: string;
  value?: string | number | JSX.Element;
}

export default function MachineInfo({ label, value }: MachineInfoProps) {
  return (
    <div className="flex justify-between">
      <span className="font-bold bg-slate-400 bg-opacity-30 rounded-md p-1 px-2">
        {label}:
      </span>
      {value ? value : "-"}
    </div>
  );
}
