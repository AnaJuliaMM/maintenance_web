import React from "react";
import { useRouter } from "next/navigation";

import { MoreHorizontal } from "lucide-react";
import { TiDelete } from "react-icons/ti";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface TableRowDropdownMenuProps {
  route: string;
  id: string | number;
  onDeleteClick: () => void;
}

export default function TableRowDropdownMenu({
  id,
  route,
  onDeleteClick,
}: TableRowDropdownMenuProps) {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => {
            router.push(`/${route}/${id}`);
          }}
          className="flex items-center justify-evenly gap-4"
        >
          Ver Detalhes
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={onDeleteClick}
          className="flex items-center justify-evenly gap-4"
        >
          Deletar <TiDelete />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
