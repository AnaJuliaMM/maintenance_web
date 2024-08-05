"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import { machineList } from "@/app/constants/machine";
import { MachineType } from "@/app/types/machine";
import { Title } from "@/app/components/Title";
import { Galleria } from "primereact/galleria";

type Params = {
  machine: string;
};

interface MachineDetailProps {
  params: Params;
}

export default function MachineDetail({ params }: MachineDetailProps) {
  const machineDetail: MachineType[] = machineList.filter(
    (machine: MachineType) => machine.serialNumber === params.machine
  );
  console.log(machineDetail);

  const itemTemplate = (item: MachineType) => {
    return (
      <img
        src={item.imageUrl}
        alt={`Imagem relacionada à máquina ${item.name}`}
        style={{ width: "100%" }}
      />
    );
  };

  return (
    <main className="flex flex-col p-6 w-svw gap-4 h-fit">
      <Title> {machineDetail[0].name}</Title>

      <DataTable
        value={machineDetail}
        className="flex justify-center items-center bg-zinc-400/10 rounded-lg p-2 p-datatable"
        tableStyle={{ width: "45rem", lineBreak: "anywhere" }}
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

      <Galleria
        value={machineDetail}
        numVisible={5}
        style={{ maxWidth: "640px" }}
        item={itemTemplate}
        thumbnail={itemTemplate}
      />
    </main>
  );
}
