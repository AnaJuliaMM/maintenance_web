"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import InputLabel from "@/components/InputLabel";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para autenticação
    console.log("Email:", username);
    console.log("Password:", password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 w-full">
      <div className=" p-8 rounded-lg shadow-lg w-80">
        <form onSubmit={handleSubmit}>
          <InputLabel
            id="username"
            type="text"
            label="Usuário"
            value={username}
            onChange={(
              event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
            ) => {
              setUsername(event.target.value);
            }}
          />
          <InputLabel
            id="password"
            type="password"
            label="Senha"
            value={password}
            onChange={(
              event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
            ) => {
              setPassword(event.target.value);
            }}
          />

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Entrar
          </button>
        </form>
        <div className="mt-4 text-center">
          <button
            onClick={() => router.push("/users")}
            className="text-blue-500 hover:underline"
          >
            Não tem uma conta? Cadastre-se
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
