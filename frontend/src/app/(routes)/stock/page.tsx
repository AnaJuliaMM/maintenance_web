"use client";
import React, { useState, useEffect } from "react";

import { IoAddCircle } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { RiFileList2Line } from "react-icons/ri";

import RegisterModal from "@/components/modals/Register";
import LoadingContainer from "@/components/LoadingContainer";
import InputLabel from "@/components/InputLabel";
import DataTable from "@/components/DataTable";

import WarehouseService from "@/services/warehouse";

import { itemType } from "@/types/itemType";

import warehouseTableColumns from "@/app/constants/warehouseTableColumns";

export default function Stock() {
  const router = useRouter();
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<itemType>({
    id: 0,
    name: "",
    description: "",
    type: "",
    acquisitionDate: "",
    supplier: "",
    quantity: 0,
    status: "",
  });

  const [items, setItems] = useState<itemType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Função para lidar com a seleção de uma linha. Quando uma linha é selecionada,
   * a função redireciona o usuário para a página correspondente ao item selecionada.
   *
   * @param {any} event - O evento de seleção da linha, que contém os dados da linha selecionada.
   */
  const onRowSelect = (event: any) => {
    router.push(`/machines/${event.data.id}`);
  };

  /**
   * Função para abrir o modal. Define o estado `isModalOpen` como `true`,
   * tornando o modal visível na tela.
   */

  const openModal = () => setIsModalOpen(true);

  /**
   * Função para fechar o modal. Define o estado `isModalOpen` como `false`,
   * tornando o modal invisível na tela.
   */
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    /**
     * Função assíncrona para buscar os itens da API e atualizar o estado do componente.
     *
     * A função tenta realizar uma requisição através de `WarehouseService.get("")` para buscar os dados.
     * Em caso de sucesso, ela atualiza o estado de `items` com os dados obtidos. Se ocorrer um erro,
     * ela atualiza o estado `error` com uma mensagem de falha e loga o erro no console.
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

    fetchItems();
  }, []);

  /**
   * Função para lidar com as mudanças nos campos de entrada de um formulário.
   * Atualiza o estado `formData` com o valor do campo alterado.
   * Para campos de texto, o valor é armazenado diretamente. Para campos de arquivo, o primeiro arquivo selecionado é armazenado.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - O evento de mudança no campo de entrada.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  /**
   * Função para lidar com o envio do formulário.
   * Previne o envio padrão, envia os dados para a API e lida com a resposta.
   *
   * @param {React.FormEvent<HTMLFormElement>} e - O evento de envio do formulário.
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await WarehouseService.post("", formData);
      setIsModalOpen(false);
      window.location.reload();
    } catch (error) {
      setError(`Falha ao enviar os dados: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col p-6 pt-10 w-svw gap-4 h-fit">
      {/* Header */}
      <header className="flex  justify-between p-5">
        <h1 className="text-blue-100 text-2xl font-bold">
          Estoque de peças e materiais
        </h1>
        <div className="flex gap-4">
          <button
            onClick={openModal}
            className="flex gap-2 justify-center items-center bg-blue-500 py-2 px-4 rounded-lg font-semibold text-sm"
          >
            <IoAddCircle size={20} />
            Cadastrar item
          </button>
        </div>
      </header>

      {/* Modal */}
      <RegisterModal
        isOpen={isModalOpen}
        title="Cadastrar Peça"
        onClose={closeModal}
        handleSubmit={handleSubmit}
      >
        <div>
          <InputLabel
            id="name"
            type="text"
            label="Nome"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <InputLabel
            id="description"
            type="text"
            label="Descrição"
            value={formData.description}
            onChange={handleChange}
          />
          <InputLabel
            id="acquisitionDate"
            type="date"
            label="Aquisição"
            value={formData.acquisitionDate}
            onChange={handleChange}
          />
        </div>

        <div className="flex gap-5">
          <InputLabel
            id="supplier"
            type="text"
            label="Fornecedor"
            value={formData.supplier}
            onChange={handleChange}
          />
          <InputLabel
            id="type"
            type="text"
            label="Tipo"
            value={formData.type}
            onChange={handleChange}
          />
        </div>

        <div className="flex gap-5">
          <InputLabel
            id="quantity"
            type="number"
            label="Qtd."
            value={String(formData.quantity)}
            onChange={handleChange}
          />
          <InputLabel
            id="status"
            type="text"
            label="Status"
            value={formData.status}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold"
        >
          Cadastrar
        </button>
      </RegisterModal>

      {loading ? (
        <LoadingContainer />
      ) : (
        <DataTable columns={warehouseTableColumns} data={items} />
      )}
    </main>
  );
}
