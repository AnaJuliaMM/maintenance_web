import React from "react";

import { maintenanceList } from "@/app/constants/maintenance";
import { Title } from "@/app/components/Title";

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

  return (
    <main className="flex flex-col p-6 w-svw gap-4 h-fit">
      <div className="flex  justify-between py-5">
        <h1 className="text-blue-100 text-2xl font-bold">
          {maintenanceDetail.title}
        </h1>
        <div className="flex gap-2 justify-center items-center bg-purple-700 py-2 px-4 rounded-lg font-semibold text-sm">
          {maintenanceDetail.status}
        </div>
      </div>
      <p>{maintenanceDetail.description}</p>
      <section className="flex flex-col items-center gap-4">
        <div className="flex flex-col justify-center gap-1 bg-zinc-400/10 rounded-sm p-5 w-full border-b-4 border-pink-700">
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
            <span className="font-bold">Time:</span>
            {maintenanceDetail.responsableTeam}
          </div>
        </div>
      </section>
      <section>
        <Title>Arquivos</Title>
      </section>
      <section>
        <Title>Peças e Materiais</Title>
      </section>
      <section>
        <Title>Comentários</Title>
      </section>
    </main>
  );
}
