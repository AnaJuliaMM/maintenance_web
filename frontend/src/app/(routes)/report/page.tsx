"use client";
import React, { useEffect, useState } from "react";

import { RiLoader2Fill } from "react-icons/ri";
import { BiError } from "react-icons/bi";

import ProtectedRoute from "@/components/ProtectRoute";
import { Title } from "@/components/Title";
import CatchAPIResponseContainer from "@/components/CatchAPIResponseContainer";
import MachineInfo from "@/components/MachineInfo";
import CustomPieChart from "@/components/charts/CustomPieChart";
import { ChartConfig } from "@/components/ui/chart";

import { itemType } from "@/types/itemType";
import { machineType } from "@/types/machineType";

import MachineService from "@/services/machine";
import WarehouseService from "@/services/warehouse";

export default function page() {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [items, setItems] = useState<itemType[]>([]);
  const [machines, setMachines] = useState<machineType[]>([]);

  useEffect(() => {
    /**
     * Função assíncrona para buscar os itens da API e atualizar o estado do componente.
     *
     * A função tenta realizar uma requisição através de `MachineService.get("")` para buscar os dados.
     * Em caso de sucesso, ela atualiza o estado de `machines` com os dados obtidos. Se ocorrer um erro,
     * ela atualiza o estado `error` com uma mensagem de falha.
     * Independentemente do sucesso ou falha da requisição, o estado `loading` é atualizado para `false`
     * para indicar que o processo de carregamento foi concluído.
     *
     * @async
     * @function
     * @returns {Promise<void>} Retorna uma Promise que resolve quando a operação for concluída.
     */
    const fetchItems = async (): Promise<void> => {
      try {
        let data: any[] = await WarehouseService.get("");
        setItems(data);
      } catch (error) {
        setError(`Falha ao carregar os dados: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    /**
     * Função assíncrona para buscar os itens da API e atualizar o estado do componente.
     *
     * A função tenta realizar uma requisição através de `MachineService.get("")` para buscar os dados.
     * Em caso de sucesso, ela atualiza o estado de `machines` com os dados obtidos. Se ocorrer um erro,
     * ela atualiza o estado `error` com uma mensagem de falha.
     * Independentemente do sucesso ou falha da requisição, o estado `loading` é atualizado para `false`
     * para indicar que o processo de carregamento foi concluído.
     *
     * @async
     * @function
     * @returns {Promise<void>} Retorna uma Promise que resolve quando a operação for concluída.
     */
    const fetchMachines = async (): Promise<void> => {
      try {
        let data: any[] = await MachineService.get("");
        setMachines(data);
      } catch (error) {
        setError(`Falha ao carregar os dados: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
    fetchMachines();
  }, []);

  const chartData = [
    {
      label: "Disponível",
      value: items.filter((item) => item.status === "Disponível").length,
      fill: "#4caf50",
    },
    {
      label: "Indisponível",
      value: items.filter((item) => item.status === "Indisponível").length,
      fill: "#f44336",
    },
  ];

  const chartConfig = {
    disponivel: {
      label: "Disponível",
    },
    indisponivel: {
      label: "Indisponível",
    },
  } satisfies ChartConfig;

  return (
    <ProtectedRoute
      requiredRoles={["user:viewer", "user:editor", "user:admin"]}
    >
      <main className="flex flex-col p-6 w-svw h-fit">
        <Title>Relatórios</Title>

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
          <section className="flex  gap-4">
            <div className="flex flex-col justify-start gap-1 bg-zinc-400/10 rounded-sm p-8 w-1/2">
              <h2 className="font-semibold text-xl py-2">Total de Registros</h2>
              <MachineInfo label="Total de Máquinas" value={machines.length} />
              <MachineInfo label="Total de Peças" value={items.length} />
            </div>
            <div className="flex flex-col justify-center gap-1 bg-zinc-400/10 rounded-sm p-8 w-1/2">
              <CustomPieChart
                title="Disponibilidade de Peças"
                description="Visão geral de peças disponíveis e indisponíveis"
                label="Peças"
                chartData={chartData}
                chartConfig={chartConfig}
              />
            </div>
          </section>
        )}
      </main>
    </ProtectedRoute>
  );
}
