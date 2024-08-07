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
  const machineDetail: MachineType = machineList.filter(
    (machine: MachineType) => machine.serialNumber === params.machine
  )[0];

  const itemTemplate = (item: string) => {
    return (
      <img
        src={item}
        alt={`Imagem relacionada ao equipamento`}
        style={{ width: "100%", borderRadius: ".5rem" }}
      />
    );
  };

  const thumbnailTemplate = (item: string) => {
    return <img src={item} alt={`Imagem relacionada ao equipamento`} />;
  };

  return (
    <main className="flex flex-col p-6 w-svw gap-4 h-fit">
      <section>
        <Title> {machineDetail.name}</Title>
        <div className="flex items-center gap-1 ">
          <Galleria
            value={machineDetail.imagesUrl}
            numVisible={5}
            circular
            style={{ maxWidth: "20rem" }}
            item={itemTemplate}
            thumbnail={thumbnailTemplate}
            showItemNavigators
            showItemNavigatorsOnHover
            showIndicators
            showThumbnails={false}
            className="bg-[var(--surface-card)] p-4 rounded-lg w-1/2"
          />
          <div className="flex flex-col justify-center gap-1 bg-zinc-400/10 rounded-lg p-4 w-1/2">
            <div>
              <span className="font-bold">Nome:</span> {machineDetail.name}
            </div>
            <div>
              <span className="font-bold">Tipo :</span> {machineDetail.type}
            </div>
            <div>
              <span className="font-bold">Modelo:</span> {machineDetail.model}
            </div>
            <div>
              <span className="font-bold">Localização:</span>{" "}
              {machineDetail.location}
            </div>
            <div>
              <span className="font-bold">Número de Série :</span>{" "}
              {machineDetail.serialNumber}
            </div>
            <div>
              <span className="font-bold">Data de fabricação :</span>{" "}
              {machineDetail.manufactureDate}
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1 className="p-4  text-blue-50/95 text-xl"> Peças e Materiais</h1>
      </section>
      <section>
        <h1 className="p-4  text-blue-50/95 text-xl">
          {" "}
          Histórico de Manutenções
        </h1>
        <DataTable
          value={machineList}
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
