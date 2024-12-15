"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { RiLoader2Fill } from "react-icons/ri";

import InputLabel from "@/components/InputLabel";

import { authType } from "@/types/authType";

import { useAuth } from "@/context/authContext";

function Login() {
  const { login } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState<authType>({
    username: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

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
      setLoading(true);
      login(formData);
      alert("Login realizado com sucesso!");
      router.push("/machines");
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        setError("Usuário ou senha inválidos.");
      } else {
        setError(`Falha ao enviar os dados: ${error.message || error}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col justify-center items-center p-6 pt-10 w-svw gap-4 h-svh">
      <Image
        src={"/image/logo.svg"}
        alt="Logo"
        width={200}
        height={200}
      ></Image>
      <form
        onSubmit={handleSubmit}
        method="post"
        className="flex flex-col gap-4 w-1/2 lg:w-1/3 p-8 bg-slate-500 rounded-md shadow-2xl shadow-slate-800"
      >
        <InputLabel
          id="username"
          type="text"
          label="Usuário"
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

        {loading ? (
          <span className="self-center">
            <RiLoader2Fill size={30} />
          </span>
        ) : (
          <button
            type="submit"
            className="w-full py-2 bg-pink-600 text-white rounded-md hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-pink-600 shadow-lg shadow-slate-600"
          >
            Entrar
          </button>
        )}

        {error && <span className="self-center">{error}</span>}
      </form>
    </main>
  );
}

export default Login;
