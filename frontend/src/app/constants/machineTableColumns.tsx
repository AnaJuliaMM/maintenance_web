import { ColumnDef } from "@tanstack/react-table";

import { machineType } from "@/types/machineType";
import { categoryType } from "@/types/categoryType";
import { locationType } from "@/types/locationType";

import TableCellRow from "@/components/TableCellRow";
import TableCellHeader from "@/components/TableCellHeader";
import TableRowDropdownMenu from "@/components/TableRowDropdownMenu";

import MachineService from "@/services/machine";

const machineTableColumns: ColumnDef<machineType>[] = [
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
        <TableRowDropdownMenu
          id={machine.id}
          route="machines"
          onDeleteClick={() => {
            const confirmDelete = window.confirm(
              "Tem certeza que deseja deletar?"
            );
            if (confirmDelete) {
              MachineService.delete("", machine.id);
              window.location.href = "/machines";
            }
          }}
        />
      );
    },
  },
];

export default machineTableColumns;
