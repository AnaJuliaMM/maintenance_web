"use client";
import React, { useState, useEffect } from "react";

import { RiLoader2Fill } from "react-icons/ri";
import { BiError } from "react-icons/bi";

import Header from "@/components/Header";
import RegisterModal from "@/components/modals/Register";
import CatchAPIResponseContainer from "@/components/CatchAPIResponseContainer";
import CustomSelect from "@/components/SelectLabel";
import InputLabel from "@/components/InputLabel";
import DataTable from "@/components/DataTable";
import ProtectedRoute from "@/components/ProtectRoute";

import WarehouseService from "@/services/warehouse";

import { itemType } from "@/types/itemType";

import warehouseTableColumns from "@/app/constants/warehouseTableColumns";

export default function Stock() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<itemType>({
    id: 0,
    name: "",
    description: "",
    type: "",
    acquisitionDate: "",
    supplier: "",
    quantity: 0,
    status: "Disponível",
  });
  const [items, setItems] = useState<itemType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
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
      setError(`${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedRoute
      requiredRoles={["user:viewer", "user:editor", "user:admin"]}
    >
      <main className="flex flex-col p-6 pt-10 w-svw gap-4 h-fit">
        <Header
          title="Estoque de peças e materiais"
          buttonText="Cadastrar Item"
          onClick={openModal}
        />

        {/* Modal */}
        <RegisterModal
          isOpen={isModalOpen}
          title="Cadastrar Peça"
          onClose={closeModal}
          handleSubmit={handleSubmit}
          buttonText="Cadastrar"
          buttonType="submit"
        >
          {error && (
            <CatchAPIResponseContainer
              text={`Desculpe, houve um erro ao carregar seus dados! ${error} `}
              icon={<BiError size={30} />}
            />
          )}
          <div className="flex gap-5">
            <InputLabel
              id="name"
              type="text"
              label="Nome"
              value={formData.name}
              onChange={handleChange}
            />
            <InputLabel
              id="description"
              type="text"
              label="Descrição"
              value={formData.description}
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
              id="acquisitionDate"
              type="date"
              label="Aquisição"
              value={formData.acquisitionDate}
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
            <CustomSelect
              id="locationId"
              label="Localização"
              items={["Disponível", "Indísponível"]}
              value={formData.status}
              onChange={handleChange}
            />
          </div>
        </RegisterModal>

        {loading ? (
          <CatchAPIResponseContainer
            text="Por favor, aguarde! Os dados estão sendo carregados"
            icon={<RiLoader2Fill size={30} />}
          />
        ) : error ? (
          <CatchAPIResponseContainer
            text="Desculpe, houve um erro ao carregar seus dados!"
            icon={<BiError size={30} />}
          />
        ) : (
          <DataTable columns={warehouseTableColumns} data={items} />
        )}
      </main>
    </ProtectedRoute>
  );
}
