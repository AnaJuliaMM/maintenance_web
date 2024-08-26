"use client";
import React, { useState } from "react";
import Image from "next/image";

import { maintenanceList } from "@/app/constants/maintenance";
import { Title } from "@/app/components/Title";
import { AiOutlineAlert } from "react-icons/ai";
import { SimpleModal } from "@/app/components/modals/SimpleModal";
import { SelectOption } from "@/app/components/SelectOption";
import { GiConfirmed } from "react-icons/gi";

type Params = {
  maintenance: string;
};

interface MaintenanceDetailProps {
  params: Params;
}

export default function Home({ params }: MaintenanceDetailProps) {
  const maintenanceDetail = maintenanceList.filter(
    (maintenance) => maintenance.code === params.maintenance
  )[0];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState<string>("");

  // Functions
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="flex flex-col p-6 w-svw gap-4 h-fit">
      {/* Header */}
      <header className="flex  justify-between py-5">
        <h1 className="text-blue-100 text-2xl font-bold">
          {maintenanceDetail.title}
        </h1>
        <div className="flex gap-4">
          <button className="flex gap-2 justify-center items-center bg-purple-700 py-2 px-4 rounded-lg font-semibold text-sm">
            {maintenanceDetail.status}
          </button>
          <button
            onClick={openModal}
            className="flex gap-2 justify-center items-center bg-blue-500 py-2 px-4 rounded-lg font-semibold text-sm"
          >
            <AiOutlineAlert size={20} />
            Atualizar status
          </button>
        </div>
      </header>

      {/* Modal */}
      <SimpleModal
        isOpen={isModalOpen}
        title="Status"
        onClose={closeModal}
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
            onClick={closeModal}
            className="flex gap-2 justify-center items-center bg-blue-500 py-2 px-4 rounded-lg font-semibold text-sm"
          >
            <GiConfirmed size={20} />
            Confirmar
          </button>
        </div>
      </SimpleModal>

      <section className="flex flex-col items-center gap-4">
        {/* Detail card */}
        <div className="flex flex-col justify-center gap-1 bg-zinc-400/10 rounded-sm p-5 w-full border-l-4 border-pink-700">
          <p className="mb-4">{maintenanceDetail.description}</p>
          <div>
            <span className="font-bold">Código:</span> {maintenanceDetail.code}
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
      </section>
      <section>
        <Title>Arquivos</Title>

        <Image
          src="https://tse4.mm.bing.net/th?id=OIP.a0zYUA0oU6zLyKQsDvSYYwHaHf&pid=Api&P=0&h=180"
          alt="photo example"
          width={200}
          height={200}
        />
      </section>
      <section>
        <Title>Peças e Materiais utilizados</Title>
      </section>
      <section>
        <Title>Comentários</Title>
      </section>
    </main>
  );
}
