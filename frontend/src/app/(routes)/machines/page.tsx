"use client";
import React, { useState } from "react";
import { Title } from "@/app/components/Title";
import { machineList } from "@/app/constants/machine";

import { IoAddCircle } from "react-icons/io5";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useRouter } from "next/navigation";

export default function Machine() {
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const onRowSelect = (event: any) => {
    router.push(`/machines/${event.data.serialNumber}`);
  };

  return (
    <main className="flex flex-col p-6 w-svw gap-4 h-fit">
      <Title>Máquinas</Title>
      <section className="flex justify-items-end gap-2 items-center cursor-pointer">
        <div className="flex gap-2 justify-center items-center bg-blue-500 py-2 px-4 rounded-lg font-semibold text-sm">
          <IoAddCircle size={20} />
          Cadastrar máquina
        </div>
      </section>
      <section className="flex">
        <DataTable
          value={machineList}
          selectionMode="single"
          selection={selectedProduct}
          onSelectionChange={(e) => setSelectedProduct(e.value)}
          onRowSelect={onRowSelect}
          metaKeySelection={false}
          dataKey="serialNumber"
          paginator
          rows={8}
          paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
          currentPageReportTemplate="{last} de {totalRecords}"
          className="bg-zinc-400/10 rounded-lg p-4 p-datatable"
          tableStyle={{ width: "55rem", lineBreak: "anywhere" }}
        >
          <Column
            field="serialNumber"
            header="Série"
            sortable
            className="p-datatable-column"
            style={{ width: "20%" }}
          ></Column>
          <Column
            field="name"
            header="Nome"
            sortable
            className="p-datatable-column"
            style={{ width: "20%" }}
          ></Column>
          <Column
            field="model"
            header="Modelo"
            sortable
            className="p-datatable-column"
            style={{ width: "20%" }}
          ></Column>

          <Column
            field="manufactureDate"
            header="Fabricação"
            sortable
            className="p-datatable-column"
            style={{ width: "20%" }}
          ></Column>
          <Column
            field="location"
            header="Localização"
            sortable
            className="p-datatable-column"
            style={{ width: "20%" }}
          ></Column>
        </DataTable>
      </section>
    </main>
  );
}
