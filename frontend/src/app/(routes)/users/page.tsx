"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { execPath } from "process";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = (e: any) => {
    try {
      e.preventDefault();

      // Aqui você pode adicionar a lógica para enviar o cadastro para a API
      console.log("Nome:", name);
      console.log("Email:", email);
      console.log("Username:", username);
      console.log("Senha:", password);

      // Após o cadastro, redireciona para a página de login
      router.push("/login");
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 w-full text-black">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Cadastro de Usuário
        </h2>

        {error && <h2 className="font-semibold text-center mb-6">{error}</h2>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Nome
            </label>
            <input
              type="text"
              id="name"
              placeholder="Digite seu nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Nome de Usuário
            </label>
            <input
              type="text"
              id="username"
              placeholder="Escolha um nome de usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              placeholder="Crie uma senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Cadastrar
          </button>
        </form>
        <div className="mt-4 text-center">
          <button
            onClick={() => router.push("/login")}
            className="text-blue-500 hover:underline"
          >
            Já tem uma conta? Faça login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
