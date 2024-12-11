"use client";
import React, { useState, useEffect } from "react";

import { IoAddCircle } from "react-icons/io5";
import { RiLoader2Fill } from "react-icons/ri";
import { BiError } from "react-icons/bi";

import RegisterModal from "@/components/modals/Register";
import CatchAPIResponseContainer from "@/components/CatchAPIResponseContainer";
import CustomSelect from "@/components/SelectLabel";
import InputLabel from "@/components/InputLabel";
import DataTable from "@/components/DataTable";

import { machineType, machinePostType } from "@/types/machineType";
import { categoryType } from "@/types/categoryType";
import { locationType } from "@/types/locationType";

import machineTableColumns from "@/app/constants/machineTableColumns";

import LocationService from "@/services/location";
import MachineService from "@/services/machine";
import CategoryService from "@/services/category";

import { useAuth } from "@/context/authContext";

export default function Machine() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { userRole } = useAuth();

  const [machines, setMachines] = useState<machineType[]>([]);
  const [categories, setCategories] = useState<categoryType[]>([]);
  const [locations, setLocations] = useState<locationType[]>([]);
  const [formData, setFormData] = useState<machinePostType>({
    name: "",
    serialNumber: "",
    model: "",
    manufactureDate: "",
    categoryId: "",
    locationId: "",
  });

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
   * Previne o envio padrão, formata o payload e envia os dados para a API e lida com a resposta.
   *
   * @param {React.FormEvent<HTMLFormElement>} e - O evento de envio do formulário.
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Find user chosen category id
      let categoryId = categories.filter(
        (category) => category.name == formData.categoryId
      )[0].id;
      // Replace category name by id to sent to backend
      formData.categoryId = categoryId;

      // Find location chosen category id
      let locationId = locations.filter(
        (location) => location.name == formData.locationId
      )[0].id;
      // Replace location name by id to sent to backend
      formData.locationId = locationId;

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
        <p>Seu papel: {userRole || "Desconhecido"}</p>

        <div className="flex gap-4">
          <button
            onClick={openModal}
            className="flex gap-2 justify-center items-center bg-blue-500 py-2 px-4 rounded-lg font-semibold text-sm"
          >
            <IoAddCircle size={20} />
            Cadastrar Máquina
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
            id="categoryId"
            label="Categoria"
            items={categories.map((category) => category.name)}
            value={formData.categoryId}
            onChange={handleChange}
          />
          <CustomSelect
            id="locationId"
            label="Localização"
            items={locations.map((location) => location.name)}
            value={formData.locationId}
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
        <DataTable columns={machineTableColumns} data={machines} />
      )}
    </main>
  );
}
