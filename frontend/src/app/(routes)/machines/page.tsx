"use client";
import React, { useState } from "react";
import { Title } from "@/app/components/Title";
import { IoAddCircle } from "react-icons/io5";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useRouter } from "next/navigation";

type Machine = {
  name: string;
  type: string;
  model: string;
  manufactureDate: string;
  serialNumber: string;
  location: string;
};

export default function Machine() {
  const router = useRouter();
  const products = [
    {
      name: "Computador A",
      type: "Desktop",
      model: "X1000",
      manufactureDate: "2023-01-15",
      serialNumber: "SN123456789",
      location: "Sala 101",
    },
    {
      name: "Impressora B",
      type: "Laser",
      model: "P2000",
      manufactureDate: "2022-07-20",
      serialNumber: "SN987654321",
      location: "Sala 102",
    },
    {
      name: "Laptop C",
      type: "Notebook",
      model: "L500",
      manufactureDate: "2023-03-10",
      serialNumber: "SN112233445",
      location: "Sala 103",
    },
    {
      name: "Projetor D",
      type: "Multimedia",
      model: "PJ700",
      manufactureDate: "2021-11-05",
      serialNumber: "SN556677889",
      location: "Sala de Reuniões",
    },
    {
      name: "Servidor E",
      type: "Rackmount",
      model: "SRX100",
      manufactureDate: "2022-02-28",
      serialNumber: "SN998877665",
      location: "Sala de Servidores",
    },
    {
      name: "Monitor F",
      type: "LCD",
      model: "M3000",
      manufactureDate: "2021-09-12",
      serialNumber: "SN223344556",
      location: "Sala 104",
    },
    {
      name: "Scanner G",
      type: "Flatbed",
      model: "SC200",
      manufactureDate: "2023-06-18",
      serialNumber: "SN778899001",
      location: "Sala 105",
    },
    {
      name: "Teclado H",
      type: "USB",
      model: "TK400",
      manufactureDate: "2023-05-25",
      serialNumber: "SN123456001",
      location: "Sala 106",
    },
    {
      name: "Mouse I",
      type: "Optical",
      model: "MS500",
      manufactureDate: "2023-04-15",
      serialNumber: "SN654321002",
      location: "Sala 107",
    },
    {
      name: "Telefone J",
      type: "IP",
      model: "T1000",
      manufactureDate: "2022-12-01",
      serialNumber: "SN789456003",
      location: "Sala 108",
    },
    {
      name: "Modem K",
      type: "Fiber Optic",
      model: "MD800",
      manufactureDate: "2023-02-15",
      serialNumber: "SN456789004",
      location: "Sala 109",
    },
    {
      name: "Roteador L",
      type: "Wireless",
      model: "RT500",
      manufactureDate: "2023-01-10",
      serialNumber: "SN321654005",
      location: "Sala 110",
    },
    {
      name: "Câmera M",
      type: "Security",
      model: "CM600",
      manufactureDate: "2022-08-30",
      serialNumber: "SN987123006",
      location: "Corredor Principal",
    },
    {
      name: "Equipamento de Áudio N",
      type: "Audio",
      model: "AU900",
      manufactureDate: "2022-10-10",
      serialNumber: "SN654987007",
      location: "Sala de Conferências",
    },
    {
      name: "Impressora O",
      type: "Inkjet",
      model: "IP800",
      manufactureDate: "2023-03-22",
      serialNumber: "SN456789008",
      location: "Sala 111",
    },
    {
      name: "Armazenamento P",
      type: "NAS",
      model: "ST2000",
      manufactureDate: "2021-05-17",
      serialNumber: "SN123789009",
      location: "Sala de TI",
    },
  ];
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const onRowSelect = (event: any) => {

    router.push(`/machines/${event.data.serialNumber}`);

  };

  return (
    <main className="flex flex-col p-6 w-svw gap-4 h-fit">
      <Title>Máquinas</Title>
      <section className="flex gap-2 items-center cursor-pointer">
        <div className="flex gap-2 justify-center items-center bg-blue-500 py-2 px-4 rounded-lg font-semibold">
          <IoAddCircle size={30} />
          Cadastrar máquina
        </div>
      </section>
      <section className="flex">
        <DataTable
          value={products}
          selectionMode="single"
          selection={selectedProduct}
          onSelectionChange={(e) => setSelectedProduct(e.value)}
          onRowSelect={onRowSelect}
          metaKeySelection={false}
          dataKey="serialNumber"
          paginator
          rows={8}
          paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
          currentPageReportTemplate="{first} a {last} de {totalRecords}"
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
