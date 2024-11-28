"use client";
import React, { useState, useEffect } from "react";

import { IoAddCircle } from "react-icons/io5";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useRouter } from "next/navigation";
import { RiFileList2Line } from "react-icons/ri";

import RegisterModal from "@/components/modals/Register";
import LoadingContainer from "@/components/LoadingContainer";
import CustomSelect from "@/components/CustomSelect";
import InputLabel from "@/components/InputLabel";
import { machineType, categoryType, locationType } from "@/types/machine";
import LocationService from "@/services/Location";
import MachineService from "@/services/Machine";
import CategoryService from "@/services/Category";

export default function Machine() {
  const router = useRouter();
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [machines, setMachines] = useState<machineType[]>([]);
  const [categories, setCategories] = useState<categoryType[]>([]);
  const [locatons, setLocations] = useState<locationType[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    serialNumber: "",
    model: "",
    manufactureDate: "",

    //  Não vai atualizar pq só faz a requisição para o backend depoissss
    location: locatons.length == 1 ? locatons[0].name : "",
    category: categories.length == 1 ? categories[0].name : "",
  });

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

    /**
     * Função assíncrona para buscar os itens da API e atualizar o estado do componente.
     *
     * A função tenta realizar uma requisição através de `CategoryService.get("")` para buscar os dados.
     * Em caso de sucesso, ela atualiza o estado de `categories` com os dados obtidos. Se ocorrer um erro,
     * ela atualiza o estado `error` com uma mensagem de falha.
     * Independentemente do sucesso ou falha da requisição, o estado `loading` é atualizado para `false`
     * para indicar que o processo de carregamento foi concluído.
     *
     * @async
     * @function
     * @returns {Promise<void>} Retorna uma Promise que resolve quando a operação for concluída.
     */
    const fetchCategory = async (): Promise<void> => {
      try {
        let data = await CategoryService.get("");
        setCategories(data);
      } catch (error) {
        setError(`Falha ao carregar os dados: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    /**
     * Função assíncrona para buscar os itens da API e atualizar o estado do componente.
     *
     * A função tenta realizar uma requisição através de `LocationService.get("")` para buscar os dados.
     * Em caso de sucesso, ela atualiza o estado de `locations` com os dados obtidos. Se ocorrer um erro,
     * ela atualiza o estado `error` com uma mensagem de falha.
     * Independentemente do sucesso ou falha da requisição, o estado `loading` é atualizado para `false`
     * para indicar que o processo de carregamento foi concluído.
     *
     * @async
     * @function
     * @returns {Promise<void>} Retorna uma Promise que resolve quando a operação for concluída.
     */
    const fetchLocation = async (): Promise<void> => {
      try {
        let data = await LocationService.get("");
        setLocations(data);
      } catch (error) {
        setError(`Falha ao carregar os dados: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
    fetchCategory();
    fetchLocation();
  }, []);

  /**
   * Função para lidar com as mudanças nos campos de entrada de um formulário.
   * Atualiza o estado `formData` com o valor do campo alterado.
   * Para campos de texto e numeros, o valor é armazenado diretamente.
   *
   * @param {React.ChangeEvent<HTMLInputElement | HTMLSelectElement>} e - O evento de mudança no campo de entrada.
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
      console.log(categories);
      console.log(formData);

      console.log(formData.category);

      let categoryId = categories.filter(
        (category) => category.name == formData.category
      );
      console.log(categoryId);

      // await MachineService.post("", formData);
      setIsModalOpen(false);
      // window.location.reload();
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
      <RegisterModal
        isOpen={isModalOpen}
        title="Cadastrar Máquina"
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
          <InputLabel
            id="serialNumber"
            type="number"
            label="Nº de Série"
            value={formData.serialNumber}
            onChange={handleChange}
          />
        </div>

        <div className="flex gap-5">
          <InputLabel
            id="model"
            type="text"
            label="Modelo"
            value={formData.model}
            onChange={handleChange}
          />
          <InputLabel
            id="manufactureDate"
            type="date"
            label="Dt de Fabricação"
            value={formData.manufactureDate}
            onChange={handleChange}
          />
        </div>

        <div className="flex gap-5">
          <CustomSelect
            id="category"
            label="Categoria"
            placeholder=""
            items={categories.map((category) => category.name)}
            value={formData.category}
            onChange={handleChange}
          />
          <CustomSelect
            id="location"
            label="Localização"
            placeholder=""
            items={locatons.map((location) => location.name)}
            value={formData.location}
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
