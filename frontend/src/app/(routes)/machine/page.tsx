import React from "react";
import { Title } from "@/app/components/Title";
import { IoAddCircle } from "react-icons/io5";

export default function Machine() {
  return (
    <main className="flex flex-col p-6 w-svw gap-4">
      <Title>Máquinas</Title>
      <section className="flex gap-2 items-center cursor-pointer">
        <div className="flex gap-2 justify-center items-center bg-blue-500 py-2 px-4 rounded-lg font-semibold">
     
          <IoAddCircle size={30} /> 
          Cadastrar máquina
        </div>
      </section>
      <section className="bg-red-700">tabela</section>
    </main>
  );
}
