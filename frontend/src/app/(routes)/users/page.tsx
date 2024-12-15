"use client";
import React, { useState, useEffect } from "react";

import { IoAddCircle } from "react-icons/io5";
import { RiLoader2Fill } from "react-icons/ri";
import { BiError } from "react-icons/bi";

import RegisterModal from "@/components/modals/Register";
import CatchAPIResponseContainer from "@/components/CatchAPIResponseContainer";
import InputLabel from "@/components/InputLabel";
import DataTable from "@/components/DataTable";

import { userType } from "@/types/userType";

import userTableColumns from "@/app/constants/userTableColumns";
import ProtectedRoute from "@/components/ProtectRoute";

import UserService from "@/services/user";

export default function User() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [users, setUsers] = useState<userType[]>([]);
  const [formData, setFormData] = useState<userType>({
    id: 0,
    name: "",
    email: "",
    username: "",
    password: "",
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
        let data: any[] = await UserService.get("");
        setUsers(data);
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
      await UserService.post("", formData);
      setIsModalOpen(false);
      window.location.reload();
    } catch (error) {
      setError(`Falha ao enviar os dados: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedRoute requiredRole="user:admin">
      <main className="flex flex-col p-6 pt-10 w-svw gap-4 h-fit">
        {/* Header */}
        <header className="flex  justify-between p-5">
          <h1 className="text-blue-100 text-2xl font-bold">
            Usuários do Sistema
          </h1>
          <div className="flex gap-4">
            <button
              onClick={openModal}
              className="flex gap-2 justify-center items-center bg-blue-500 py-2 px-4 rounded-lg font-semibold text-sm"
            >
              <IoAddCircle size={20} />
              Cadastrar Usuário
            </button>
          </div>
        </header>

        {/* Modal */}
        <RegisterModal
          isOpen={isModalOpen}
          title="Cadastrar Usuário"
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
              id="email"
              type="email"
              label="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <InputLabel
              id="username"
              type="text"
              label="Username"
              value={formData.username}
              onChange={handleChange}
            />
            <InputLabel
              id="password"
              type="password"
              label="Senha"
              value={formData.password}
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
          <DataTable columns={userTableColumns} data={users} />
        )}
      </main>
    </ProtectedRoute>
  );
}
