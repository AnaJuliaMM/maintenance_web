"use client";
import React, { useState, useEffect } from "react";

import { RiLoader2Fill } from "react-icons/ri";
import { BiError } from "react-icons/bi";
import { TiDelete } from "react-icons/ti";

import { Title } from "@/components/Title";
import MachineInfo from "@/components/MachineInfo";
import CatchAPIResponseContainer from "@/components/CatchAPIResponseContainer";
import DataTable from "@/components/DataTable";
import DeleteItemButton from "@/components/DeleteItemButton";
import ProtectedRoute from "@/components/ProtectRoute";

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

  /**
   * Função de exclusão de uma máquina.
   *
   * Esta função exibe uma mensagem de confirmação para o usuário antes de excluir uma máquina.
   * Se o usuário confirmar a exclusão, a função chama o serviço de exclusão e redireciona para a página de máquinas.
   * Caso contrário, exibe uma mensagem informando que a operação foi cancelada.
   *
   * @function handleDelete
   * @returns {void}
   */
  const handleDelete = (): void => {
    const confirmDelete = window.confirm("Tem certeza que deseja deletar?");
    if (confirmDelete) {
      WarehouseService.delete("", item.id);
      window.location.href = "/stock";
    }
  };

  return (
    <ProtectedRoute
      requiredRoles={["user:viewer", "user:editor", "user:admin"]}
    >
      <main className="flex flex-col p-6 w-svw h-fit">
        <Title>Detalhes</Title>

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
            <section className="flex flex-col self-center gap-4 w-2/3">
              <div className="flex flex-col justify-center  gap-1 bg-zinc-400/10 rounded-sm p-8 w-full ">
                <span className="flex justify-between w-full">
                  <Title>{item.name}</Title>
                  <DeleteItemButton text="Deletar" onClick={handleDelete} />
                </span>
                <hr className="border-t-2 border-gray-500 my-4" />

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
        <section>
          <Title>Histórico de Manutenção</Title>
          <DataTable columns={manteinanceTableColumns} data={maintenanceList} />
        </section>
      </main>
    </ProtectedRoute>
  );
}
