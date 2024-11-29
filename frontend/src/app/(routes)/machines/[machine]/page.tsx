"use client";
import React, { useState, useEffect } from "react";

import { useRouter } from "next/navigation";

import { Title } from "@/app/components/Title";
import MachineInfo from "@/components/MachineInfo";
import LoadingContainer from "@/components/LoadingContainer";
import DataTable from "@/components/DataTable";

import manteinanceTableColumns from "@/app/constants/manteinanceTableColumns";
import { maintenanceList } from "@/app/constants/maintenance";

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

  return (
    <main className="flex flex-col p-6 w-svw h-fit">
      {loading ? (
        <>
          <Title>Detalhes da Máquina</Title>
          <LoadingContainer />
        </>
      ) : (
        <>
          <Title>{machine.name}</Title>
          <section className="flex flex-col items-start gap-4">
            <div className="flex flex-col justify-center  gap-1 bg-zinc-400/10 rounded-sm p-8 m-4 w-1/2 border-b-4  border-purple-700">
              <MachineInfo
                label="Número de Série"
                value={machine.serialNumber}
              />
              <MachineInfo label="Nome" value={machine.name} />
              <MachineInfo label="Modelo" value={machine.model} />
              <MachineInfo label="Categoria" value={machine.category?.name} />
              <MachineInfo label="Local" value={machine.location?.name} />
              <MachineInfo label="Fabricação" value={machine.manufactureDate} />
            </div>
          </section>
        </>
      )}

      {/* Maintenance table */}
      <hr className="border-t-2 border-gray-500 my-4" />
      <section>
        <Title>Histórico de Manutenção</Title>
        <DataTable columns={manteinanceTableColumns} data={maintenanceList} />
      </section>
    </main>
  );
}
