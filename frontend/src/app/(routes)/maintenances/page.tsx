"use client";
import React, { useState } from "react";

import { IoAddCircle } from "react-icons/io5";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useRouter } from "next/navigation";
import { RiFileList2Line } from "react-icons/ri";

import { Title } from "@/app/components/Title";
import { maintenanceList } from "@/app/constants/maintenance";
import Link from "next/link";

export default function Machine() {
  const router = useRouter();
  const [selectedRow, setSelectedRow] = useState<any>(null);

  // Functions
  const onRowSelect = (event: any) => {
    router.push(`/machines/${event.data.serialNumber}`);
  };

  return (
    <main className="flex flex-col p-6 pt-10 w-svw gap-4 h-fit">
      <Title>Manutenções</Title>
      <div className="flex gap-4 py-2">
        <Link href="/machines/register">
          <div className="flex gap-2 justify-center items-center bg-blue-500 py-2 px-4 rounded-lg font-semibold text-sm">
            <IoAddCircle size={20} />
            Cadastrar máquina
          </div>
        </Link>

        <div className="flex gap-2 justify-center items-center bg-pink-600 py-2 px-4 rounded-lg font-semibold text-sm">
          <RiFileList2Line size={20} />
          Gerar Relatório
        </div>
      </div>

      <section>
        <Link href="/maintenances/register" className="flex cursor-pointer">
          <Title>Histórico de Mantenções</Title>
        </Link>

        <DataTable
          value={maintenanceList}
          selectionMode="single"
          selection={selectedRow}
          onSelectionChange={(e) => setSelectedRow(e.value)}
          onRowSelect={onRowSelect}
          metaKeySelection={false}
          dataKey="serialNumber"
          paginator
          rows={2}
          paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
          currentPageReportTemplate="Clique para Ler mais"
          className="bg-zinc-400/10 rounded-lg p-4 p-datatable"
          tableStyle={{ lineBreak: "anywhere" }}
        >
          <Column
            field="requisitionDate"
            header="Data"
            sortable
            className="p-datatable-column"
          ></Column>
          <Column
            field="description"
            header="Descrição"
            sortable
            className="p-datatable-column"
            style={{ width: "35%" }}
          ></Column>
          <Column
            field="type"
            header="Tipo"
            sortable
            className="p-datatable-column"
          ></Column>
          <Column
            field="responsableTeam"
            header="Equipe"
            sortable
            className="p-datatable-column"
          ></Column>
        </DataTable>
      </section>

      <section>
        <Title>Status da Manutenções</Title>
      </section>
    </main>
  );
}
