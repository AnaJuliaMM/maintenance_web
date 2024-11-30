"use client";
import React, { useState } from "react";
import Image from "next/image";

import { maintenanceList } from "@/app/constants/maintenance";
import { Title } from "@/components/Title";
import { AiOutlineAlert } from "react-icons/ai";
import { SimpleModal } from "@/components/modals/SimpleModal";
import { SelectOption } from "@/app/components/SelectOption";
import { Comment } from "@/app/components/Comment";

import { GiConfirmed } from "react-icons/gi";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useRouter } from "next/navigation";
import { IoAddCircle } from "react-icons/io5";

type Params = {
  maintenance: string;
};

interface MaintenanceDetailProps {
  params: Params;
}

export default function Home({ params }: MaintenanceDetailProps) {
  const router = useRouter();
  const maintenanceDetail = maintenanceList.filter(
    (maintenance) => maintenance.code === params.maintenance
  )[0];
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const [isCommentsModalOpen, setIsCommentsModalOpen] = useState(false);

  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [status, setStatus] = useState<string>("");

  // Functions
  const openStatusModal = () => setIsStatusModalOpen(true);
  const closeStatusModal = () => setIsStatusModalOpen(false);
  const openCommentsModal = () => setIsCommentsModalOpen(true);
  const closeCommentsModal = () => setIsCommentsModalOpen(false);

  const onRowSelect = (event: any) => {
    router.push(`/machines/${event.data.serialNumber}`);
  };

  return (
    <main className="flex flex-col p-6 w-svw gap-4 h-fit">
      {/* Header */}
      <header className="flex  justify-between py-5">
        <h1 className="text-blue-100 text-2xl font-bold">
          {maintenanceDetail.title}
        </h1>
        <div className="flex gap-4">
          <button
            onClick={openStatusModal}
            className="flex gap-2 justify-center items-center bg-blue-500 py-2 px-4 rounded-lg font-semibold text-sm"
          >
            <AiOutlineAlert size={20} />
            Atualizar status
          </button>
        </div>
      </header>

      {/* Modal */}
      <SimpleModal
        isOpen={isStatusModalOpen}
        title="Status"
        onClose={closeStatusModal}
      >
        <div className="flex flex-col gap-4 p-4">
          <SelectOption
            id="priority"
            label=""
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            options={[
              { value: "to-do", label: "A fazer" },
              { value: "doing", label: "Em andamento" },
              { value: "done", label: "Finalizado" },
            ]}
          />
          <button
            onClick={closeStatusModal}
            className="flex gap-2 justify-center items-center bg-blue-500 py-2 px-4 rounded-lg font-semibold text-sm"
          >
            <GiConfirmed size={20} />
            Confirmar
          </button>
        </div>
      </SimpleModal>

      {/* Detail card */}

      <section className="flex flex-col items-center gap-4">
        <div className="flex justify-between p-5 bg-zinc-400/10 border-l-4 border-pink-700 rounded-sm w-full">
          <div className="flex flex-col justify-center gap-1  w-3/4  ">
            <p className="mb-4">{maintenanceDetail.description}</p>
            <div>
              <span className="font-bold">Código:</span>{" "}
              {maintenanceDetail.code}
            </div>
            <div>
              <span className="font-bold">Tipo :</span> {maintenanceDetail.type}
            </div>
            <div>
              <span className="font-bold">Data:</span>{" "}
              {maintenanceDetail.requisitionDate}
            </div>
            <div>
              <span className="font-bold">Prioridade:</span>{" "}
              {maintenanceDetail.priority}
            </div>
            <div>
              <span className="font-bold">Time: </span>
              {maintenanceDetail.responsableTeam}
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex gap-2 justify-center items-center bg-pink-700  py-2 px-4 rounded-lg font-semibold text-sm h-fit">
              {maintenanceDetail.status}
            </div>
          </div>
        </div>
      </section>

      {/* Files */}
      <section>
        <Title>Arquivos</Title>

        <Image
          src="https://tse4.mm.bing.net/th?id=OIP.a0zYUA0oU6zLyKQsDvSYYwHaHf&pid=Api&P=0&h=180"
          alt="photo example"
          width={200}
          height={200}
        />
      </section>

      {/* Materials table */}
      <section>
        <header className="flex  justify-between py-5">
          <h1 className="text-blue-100 text-2xl font-bold">
            Peças e Materiais
          </h1>
          <div className="flex gap-4">
            <button
              onClick={openCommentsModal}
              className="flex gap-2 justify-center items-center bg-blue-500 py-2 px-4 rounded-lg font-semibold text-sm"
            >
              <IoAddCircle size={20} />
              novo registro
            </button>
          </div>
        </header>
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

      {/* Comments */}
      <section>
        <header className="flex  justify-between py-5">
          <h1 className="text-blue-100 text-2xl font-bold">Comentários</h1>
          <div className="flex gap-4">
            <button
              onClick={openCommentsModal}
              className="flex gap-2 justify-center items-center bg-blue-500 py-2 px-4 rounded-lg font-semibold text-sm"
            >
              <IoAddCircle size={20} />
              adicionar novo comentário
            </button>
          </div>
        </header>

        {/* Modal */}
        <SimpleModal
          isOpen={isCommentsModalOpen}
          title="Comentários"
          onClose={closeCommentsModal}
        >
          <div className="flex flex-col justify-center items-center gap-4 p-4 w-full">
            <div className="flex flex-col gap-4">
              <label htmlFor="images" className="block font-medium">
                Descrição:
              </label>
              <input
                type="textarea"
                id="description"
                name="description"
                required
                className=" p-5 rounded-md"
              />
            </div>
            <button
              onClick={closeCommentsModal}
              className="flex gap-2 justify-center items-center bg-blue-500 py-2 px-4 rounded-lg font-semibold text-sm"
            >
              <GiConfirmed size={20} />
              Confirmar
            </button>
          </div>
        </SimpleModal>

        {/* Comments card */}
        <Comment id="" content="exemplo" />
      </section>
    </main>
  );
}
