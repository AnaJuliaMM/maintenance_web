import React from "react";

interface MachineInfoProps {
  label: string;
  value?: string | number | JSX.Element;
}

export default function MachineInfo({ label, value }: MachineInfoProps) {
  return (
    <div className="flex justify-between">
      <span className="font-bold">{label}:</span> {value}
    </div>
  );
}
