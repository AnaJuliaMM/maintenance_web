"use client";
import React, { useState, useEffect } from "react";

import { Title } from "@/app/components/Title";
import MachineInfo from "@/components/MachineInfo";
import LoadingContainer from "@/components/LoadingContainer";
import DataTable from "@/components/DataTable";

import manteinanceTableColumns from "@/app/constants/manteinanceTableColumns";
import { maintenanceList } from "@/app/constants/maintenance";

import WarehouseService from "@/services/warehouse";

import { itemType } from "@/types/itemType";

type Params = {
  stock: string;
};

interface stockProps {
  params: Params;
}

export default function Stock({ params }: stockProps) {
  const [item, setitem] = useState<itemType>({
    id: 0,
    name: "",
    description: "",
    type: "",
    acquisitionDate: "",
    supplier: "",
    quantity: 0,
    status: "",
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    /**
     * Função assíncrona para buscar os itens da API e atualizar o estado do componente.
     *
     * A função tenta realizar uma requisição através de `Warehouse.getById("")` para buscar os dados.
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
        let data = await WarehouseService.getById("", id);
        setitem(data);
      } catch (error) {
        setError(`Falha ao carregar os dados: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchMachine(parseInt(params.stock));
  }, []);

  return (
    <main className="flex flex-col p-6 w-svw h-fit">
      {loading ? (
        <>
          <Title>Detalhes do Item</Title>
          <LoadingContainer />
        </>
      ) : (
        <>
          <Title>{item.name}</Title>
          <section className="flex flex-col item-start gap-4">
            <div className="flex flex-col justify-center  gap-1 bg-zinc-400/10 rounded-sm p-8 w-full ">
              <MachineInfo label="Nome" value={item.name} />
              <MachineInfo label="Descrição" value={item.description} />
              <MachineInfo label="Tipo" value={item.type} />
              <MachineInfo label="Fornecedor" value={item.supplier} />
              <MachineInfo label="Aquisição" value={item.acquisitionDate} />
              <MachineInfo label="Qtd." value={item.quantity} />
              <MachineInfo label="Status" value={item.status} />
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
