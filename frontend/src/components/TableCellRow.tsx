import React from "react";

interface TableCellRowProps {
  text: string;
}

export default function TableCellRow({ text }: TableCellRowProps) {
  return <div className="text-left">{text}</div>;
}
