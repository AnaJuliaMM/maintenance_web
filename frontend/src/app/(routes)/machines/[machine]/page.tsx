"use client";
import React, { useState, useEffect } from "react";

import { useRouter } from "next/navigation";

import { RiLoader2Fill } from "react-icons/ri";
import { BiError } from "react-icons/bi";
import { TiDelete } from "react-icons/ti";

import { Title } from "@/components/Title";
import MachineInfo from "@/components/MachineInfo";
import CatchAPIResponseContainer from "@/components/CatchAPIResponseContainer";
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

  return (
    <main className="flex flex-col p-6 w-svw h-fit">
      <Title>Detalhes</Title>
      <hr className="border-t-2 border-gray-500 my-4" />

      {loading ? (
        <CatchAPIResponseContainer
          text="Por favor, aguarde! Os dados estão sendo carregados"
          icon={<RiLoader2Fill size={30} />}
        />
      ) : error ? (
        <CatchAPIResponseContainer
          text={`Desculpe, houve um erro ao carregar seus dados!`}
          icon={<BiError size={30} />}
        />
      ) : (
        <>
          <section className="flex flex-col items-start gap-4">
            <div className="flex flex-col justify-center gap-1 bg-zinc-400/10 rounded-sm p-8 w-full ">
              <span className="flex justify-between w-full">
                <Title>{machine.name}</Title>

                <button
                  onClick={() => {
                    MachineService.delete("", machine.id);
                    window.location.href = "/machines";
                  }}
                  className="flex items-center justify-evenly gap-4 bg-slate-400 w-fit h-fit py-2 px-4 rounded-lg"
                >
                  Deletar <TiDelete size={30} />
                </button>
              </span>
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
      <section className="flex flex-col py-8">
        <Title>Histórico de Manutenção</Title>
        <DataTable columns={manteinanceTableColumns} data={maintenanceList} />
      </section>
    </main>
  );
}
