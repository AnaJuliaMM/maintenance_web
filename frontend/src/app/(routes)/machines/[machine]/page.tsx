"use client";
import React, { useState, useEffect } from "react";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useRouter } from "next/navigation";
import { Galleria } from "primereact/galleria";

import { machineList } from "@/app/constants/machine";
import { maintenanceList } from "@/app/constants/maintenance";
import { Title } from "@/app/components/Title";

import MachineService from "@/services/machine";
import { machineType } from "@/types/machineType";

type Params = {
  machine: string;
};

interface machineProps {
  params: Params;
}

export default function machine({ params }: machineProps) {
  const router = useRouter();
  const [selectedRow, setSelectedRow] = useState<any>(null);

  const [machine, setMachine] = useState<machineType>({
    id: 0,
    name: "",
    serialNumber: "",
    model: "",
    manufactureDate: "",
    category: {
      id: 0,
      name: "",
    },
    location: {
      id: 0,
      name: "",
      description: "",
    },
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    /**
     * Função assíncrona para buscar os itens da API e atualizar o estado do componente.
     *
     * A função tenta realizar uma requisição através de `MachineService.getById("")` para buscar os dados.
     * Em caso de sucesso, ela atualiza o estado de `machine` com os dados obtidos. Se ocorrer um erro,
     * ela atualiza o estado `error` com uma mensagem de falha.
     * Independentemente do sucesso ou falha da requisição, o estado `loading` é atualizado para `false`
     * para indicar que o processo de carregamento foi concluído.
     *
     * @async
     * @function
     * @returns {Promise<void>} Retorna uma Promise que resolve quando a operação for concluída.
     */
    const fetchMachine = async (id: number): Promise<void> => {
      try {
        let data = await MachineService.getById("", id);
        setMachine(data);
      } catch (error) {
        setError(`Falha ao carregar os dados: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchMachine(parseInt(params.machine));
  }, []);

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
      <Title>{machine.name}</Title>
      <section className="flex flex-col items-center gap-4">
        {/* Details card */}
        <div className="flex flex-col justify-center gap-1 bg-zinc-400/10 rounded-sm p-5 w-full border-l-4  border-purple-700">
          <div>
            <span className="font-bold">Número de Série :</span>{" "}
            {machine.serialNumber}
          </div>
          <div>
            <span className="font-bold">Nome:</span> {machine.name}
          </div>

          <div>
            <span className="font-bold">Modelo:</span> {machine.model}
          </div>
          <div>
            <div>
              <span className="font-bold">Categoria :</span>{" "}
              {machine.category?.name}
            </div>
            <span className="font-bold">Local:</span> {machine.location?.name}
          </div>

          <div>
            <span className="font-bold">Data de fabricação :</span>{" "}
            {machine.manufactureDate}
          </div>
        </div>
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
