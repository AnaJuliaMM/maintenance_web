import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { TiDelete } from "react-icons/ti";

import { maintenanceType } from "@/types/maintenanceType";

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

// import MachineService from "@/services/machine";

const manteinanceTableColumns: ColumnDef<maintenanceType>[] = [
  {
    accessorKey: "code",
    header: ({ column }) => {
      return <TableCellHeader text="ID" column={column} />;
    },
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return <TableCellHeader text="Title" column={column} />;
    },
  },
  {
    accessorKey: "type",
    header: ({ column }) => {
      return <TableCellHeader text="Tipo" column={column} />;
    },
  },
  {
    accessorKey: "requisitionDate",
    header: ({ column }) => {
      return <TableCellHeader text="Solicitação" column={column} />;
    },
    cell: ({ row }) => {
      const location = new Date(row.getValue("requisitionDate"));
      return location ? (
        <TableCellRow text={location.toLocaleDateString()} />
      ) : (
        <TableCellRow text="" />
      );
    },
  },
  {
    accessorKey: "responsableTeam",
    header: ({ column }) => {
      return <TableCellHeader text="Time" column={column} />;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const maintenance: maintenanceType = row.original;

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
                window.location.reload();
              }}
              className="flex items-center justify-evenly gap-4"
            >
              Ver Detalhes
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem
              onClick={() => {
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

export default manteinanceTableColumns;
