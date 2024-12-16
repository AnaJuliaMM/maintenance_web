import { ColumnDef } from "@tanstack/react-table";

import { userType } from "@/types/userType";

import TableCellHeader from "@/components/TableCellHeader";
import TableRowDropdownMenu from "@/components/TableRowDropdownMenu";

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
        <TableRowDropdownMenu
          id={user.id}
          route="users"
          onDeleteClick={() => {
            const confirmDelete = window.confirm(
              "Tem certeza que deseja deletar?"
            );
            if (confirmDelete) {
              UserService.delete("", user.id);
              window.location.href = "/users";
            }
          }}
        />
      );
    },
  },
];

export default userTableColumns;
