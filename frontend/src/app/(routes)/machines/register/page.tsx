"use client";
import React, { useState } from "react";

import { FileUpload } from "primereact/fileupload";

import { Title } from "@/app/components/Title";
import { machineType } from "@/app/types/machine";

export default function Home() {
  const [formData, setFormData] = useState<machineType>({
    name: "",
    type: "",
    model: "",
    manufactureDate: "",
    serialNumber: "",
    location: "",
    imagesUrl: [],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <main className="flex flex-col p-6 w-svw gap-4 h-fit">
      <Title>Cadastrar Máquina</Title>
      <form className="register-form">
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="type">Tipo:</label>
          <input
            type="text"
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="model">Modelo:</label>
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
          <label htmlFor="manufactureDate">Data de Fabricação:</label>
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
          <label htmlFor="serialNumber">Numero de Série:</label>
          <input
            type="text"
            id="serialNumber"
            name="serialNumber"
            value={formData.serialNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="location">Localização:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="images">Imagens:</label>
          <input
            type="file"
            id="images"
            name="images"
            required
          />
          
        </div>
        <button
          type="submit"
          className="flex gap-2 justify-center items-center bg-blue-500 py-2 px-4 rounded-lg font-semibold text-sm"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
