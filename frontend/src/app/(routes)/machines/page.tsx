"use client";
import React, { useState, useEffect } from "react";

import { IoAddCircle } from "react-icons/io5";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useRouter } from "next/navigation";
import { RiFileList2Line } from "react-icons/ri";

import MachineRegisterModal from "@/components/modals/Register";
import LoadingContainer from "@/components/LoadingContainer";
import { machineType } from "@/types/machine";
import MachineService from "@/services/Machine";

export default function Machine() {
  const router = useRouter();
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    serialNumber: "",
    model: "",
    manufactureDate: "",
    location: "",
    category: "",
    images: null,
  });

  const [machines, setMachines] = useState<machineType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Função para lidar com a seleção de uma linha. Quando uma linha é selecionada,
   * a função redireciona o usuário para a página correspondente ao item selecionada.
   *
   * @param {any} event - O evento de seleção da linha, que contém os dados da linha selecionada.
   */
  const onRowSelect = (event: any) => {
    router.push(`/machines/${event.data.serialNumber}`);
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
        let data: any[] = await MachineService.get("");
        setMachines(data);
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
      await MachineService.post("", formData);
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
        <h1 className="text-blue-100 text-2xl font-bold">Máquinas</h1>
        <div className="flex gap-4">
          <button
            onClick={openModal}
            className="flex gap-2 justify-center items-center bg-blue-500 py-2 px-4 rounded-lg font-semibold text-sm"
          >
            <IoAddCircle size={20} />
            Cadastrar Máquina
          </button>

          <button className="flex gap-2 justify-center items-center bg-pink-600 py-2 px-4 rounded-lg font-semibold text-sm">
            <RiFileList2Line size={20} />
            Gerar Relatório
          </button>
        </div>
      </header>

      {/* Modal */}
      <MachineRegisterModal
        isOpen={isModalOpen}
        title="Cadastrar Máquina"
        onClose={closeModal}
        handleSubmit={handleSubmit}
      >
        <div>
          <div>
            <label htmlFor="name" className="block font-medium">
              Nome:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <div>
              <label htmlFor="serialNumber" className="block font-medium">
                Numero de Série:
              </label>
              <input
                type="text"
                id="serialNumber"
                name="serialNumber"
                value={formData.serialNumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="flex gap-5">
          <div>
            <label htmlFor="manufactureDate" className="block font-medium">
              Data de Fabricação:
            </label>
            <input
              type="date"
              id="manufactureDate"
              name="manufactureDate"
              value={formData.manufactureDate}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="type" className="block font-medium">
              Tipo:
            </label>
            <input
              type="text"
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="flex gap-5">
          <div>
            <label htmlFor="model" className="block font-medium">
              Modelo:
            </label>
            <input
              type="text"
              id="model"
              name="model"
              value={formData.model}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="location" className="block font-medium">
              Localização:
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="images" className="block font-medium">
            Imagens:
          </label>
          <input
            type="file"
            id="images"
            name="images"
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold"
        >
          Cadastrar
        </button>
      </MachineRegisterModal>

      {loading ? (
        <LoadingContainer />
      ) : (
        <DataTable
          value={machines}
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
            field="serialNumber"
            header="Série"
            sortable
            className="p-datatable-column"
            style={{ width: "15%" }}
          ></Column>
          <Column
            field="name"
            header="Nome"
            sortable
            className="p-datatable-column"
            style={{ width: "20%" }}
          ></Column>
          <Column
            field="model"
            header="Modelo"
            sortable
            className="p-datatable-column"
            style={{ width: "15%" }}
          ></Column>
          <Column
            field="location.name"
            header="Localização"
            sortable
            className="p-datatable-column"
            style={{ width: "15%" }}
          ></Column>
          <Column
            field="category.name"
            header="Categoria"
            sortable
            className="p-datatable-column"
            style={{ width: "15%" }}
          ></Column>
        </DataTable>
      )}
    </main>
  );
}
