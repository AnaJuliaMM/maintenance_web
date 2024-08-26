"use client";
import React, { useState } from "react";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useRouter } from "next/navigation";
import { Galleria } from "primereact/galleria";

import { machineList } from "@/app/constants/machine";
import { maintenanceList } from "@/app/constants/maintenance";
import { Title } from "@/app/components/Title";

type Params = {
  machine: string;
};

interface MachineDetailProps {
  params: Params;
}

export default function MachineDetail({ params }: MachineDetailProps) {
  const router = useRouter();
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const machineDetail = machineList.filter(
    (machine) => machine.serialNumber === params.machine
  )[0];

  // Functions
  const onRowSelect = (event: any) => {
    router.push(`/maintenances/${event.data.code}`);
  };

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
    <main className="flex flex-col p-6 w-svw h-fit">
      <Title>{machineDetail.name}</Title>
      <section className="flex flex-col items-center gap-4">

        {/* Details card */}
        <div className="flex flex-col justify-center gap-1 bg-zinc-400/10 rounded-sm p-5 w-full border-l-4  border-purple-700">
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

        {/* Photos */}
        <Galleria
          value={machineDetail.imagesUrl}
          numVisible={5}
          circular
          style={{ maxWidth: "40rem" }}
          item={itemTemplate}
          thumbnail={thumbnailTemplate}
          showItemNavigators
          showItemNavigatorsOnHover
          showIndicators
          showThumbnails={false}
          className="p-4 rounded-lg w-1/2"
        />
      </section>

      {/* Maintenance table */}
      <section>
        <Title>Histórico de Manutenção</Title>
        <DataTable
          value={maintenanceList}
          selectionMode="single"
          selection={selectedRow}
          onSelectionChange={(e) => setSelectedRow(e.value)}
          onRowSelect={onRowSelect}
          metaKeySelection={false}
          dataKey="serialNumber"
          paginator
          rows={8}
          paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
          currentPageReportTemplate="{last} de {totalRecords}"
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
    </main>
  );
}
