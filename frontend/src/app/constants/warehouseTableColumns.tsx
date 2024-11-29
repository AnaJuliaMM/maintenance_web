import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { TiDelete } from "react-icons/ti";

import { itemType } from "@/types/itemType";

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

import WarehouseService from "@/services/warehouse";

const warehouseTableColumns: ColumnDef<itemType>[] = [
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
    accessorKey: "quantity",
    header: ({ column }) => {
      return <TableCellHeader text="Qtd" column={column} />;
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return <TableCellHeader text="Status" column={column} />;
    },
  },
  {
    accessorKey: "acquisitionDate",
    header: ({ column }) => {
      return <TableCellHeader text="Aquisição" column={column} />;
    },
    cell: ({ row }) => {
      const location = new Date(row.getValue("acquisitionDate"));
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
      const item: itemType = row.original;

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
                window.location.href = `/stock/${item.id}`;
              }}
              className="flex items-center justify-evenly gap-4"
            >
              Ver Detalhes
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem
              onClick={() => {
                WarehouseService.delete("", item.id);
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

export default warehouseTableColumns;
