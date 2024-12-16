import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { TiDelete } from "react-icons/ti";

import { itemType } from "@/types/itemType";

import TableCellRow from "@/components/TableCellRow";
import TableCellHeader from "@/components/TableCellHeader";
import TableRowDropdownMenu from "@/components/TableRowDropdownMenu";

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
        <TableRowDropdownMenu
          id={item.id}
          route="stock"
          onDeleteClick={() => {
            const confirmDelete = window.confirm(
              "Tem certeza que deseja deletar?"
            );
            if (confirmDelete) {
              WarehouseService.delete("", item.id);
              window.location.href = "/stock";
            }
          }}
        />
      );
    },
  },
];

export default warehouseTableColumns;
