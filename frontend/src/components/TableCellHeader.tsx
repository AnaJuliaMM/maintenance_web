import React from "react";

import { ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";

interface TableCellHeaderProps {
  text: string;
  column: any;
}

export default function TableCellHeader({
  text,
  column,
}: TableCellHeaderProps) {
  return (
    <Button
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      className="bg-transparent border-none shadow-none hover:bg-slate-600 m-1"
    >
      {text}
      <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  );
}
