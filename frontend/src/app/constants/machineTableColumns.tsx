import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { MoreHorizontal } from "lucide-react";
import { TiDelete } from "react-icons/ti";
import { MdEdit } from "react-icons/md";

import { machineType } from "@/types/machineType";
import { categoryType } from "@/types/categoryType";
import { locationType } from "@/types/locationType";

import TableCellRow from "@/components/TableCellRow";
import TableCellHeader from "@/components/TableCellHeader";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import MachineService from "@/services/machine";

const machineTableColumns: ColumnDef<machineType>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return <TableCellHeader text="Name" column={column} />;
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return <TableCellHeader text="Nome" column={column} />;
    },
  },
  {
    accessorKey: "model",
    header: ({ column }) => {
      return <TableCellHeader text="Modelo" column={column} />;
    },
  },
  {
    accessorKey: "category",
    header: ({ column }) => {
      return <TableCellHeader text="Modelo" column={column} />;
    },
    cell: ({ row }) => {
      const category: categoryType = row.getValue("category");
      return category ? (
        <TableCellRow text={category.name} />
      ) : (
        <TableCellRow text="" />
      );
    },
  },
  {
    accessorKey: "location",
    header: ({ column }) => {
      return <TableCellHeader text="Modelo" column={column} />;
    },
    cell: ({ row }) => {
      const location: locationType = row.getValue("location");
      return location ? (
        <TableCellRow text={location.name} />
      ) : (
        <TableCellRow text="" />
      );
    },
  },
  {
    accessorKey: "manufactureDate",
    header: ({ column }) => {
      return <TableCellHeader text="Modelo" column={column} />;
    },
    cell: ({ row }) => {
      const location = new Date(row.getValue("manufactureDate"));
      return location ? (
        <TableCellRow text={location.toLocaleDateString()} />
      ) : (
        <TableCellRow text="" />
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const machine: machineType = row.original;

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
                window.location.href = `/machines/${machine.id}`;
              }}
              className="flex items-center justify-evenly gap-4"
            >
              Ver Detalhes
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem
              onClick={() => {
                MachineService.delete("", machine.id);
                window.location.reload();
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

export default machineTableColumns;
