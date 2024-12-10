import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { TiDelete } from "react-icons/ti";

import { userType } from "@/types/userType";

import TableCellHeader from "@/components/TableCellHeader";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import UserService from "@/services/user";

const userTableColumns: ColumnDef<userType>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return <TableCellHeader text="ID" column={column} />;
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return <TableCellHeader text="Nome" column={column} />;
    },
  },
  {
    accessorKey: "username",
    header: ({ column }) => {
      return <TableCellHeader text="Usuário" column={column} />;
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return <TableCellHeader text="Email" column={column} />;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user: userType = row.original;

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
                const confirmDelete = window.confirm(
                  "Tem certeza que deseja deletar?"
                );
                if (confirmDelete) {
                  UserService.delete("", user.id);
                  window.location.href = "/machines";
                }
              }}
              className="flex items-center justify-evenly gap-4"
            >
              Deletar <TiDelete />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default userTableColumns;
