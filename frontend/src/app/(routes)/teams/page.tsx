"use client";
import React, { useState } from "react";

import { IoAddCircle } from "react-icons/io5";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useRouter } from "next/navigation";
import { RiFileList2Line } from "react-icons/ri";

import MachineRegisterModal from "@/app/components/modals/Register";
import { machineList } from "@/app/constants/machine";

export default function Machine() {
  const router = useRouter();
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    model: "",
    manufactureDate: "",
    serialNumber: "",
    location: "",
    images: null,
  });

  // Functions
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const onRowSelect = (event: any) => {
    router.push(`/machines/${event.data.serialNumber}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setIsModalOpen(false);
  };

  return (
    <main className="flex flex-col p-6 pt-10 w-svw gap-4 h-fit">
      {/* Header */}
      <header className="flex  justify-between p-5">
        <h1 className="text-blue-100 text-2xl font-bold">Equipes</h1>
        <div className="flex gap-4">
          <button
            onClick={openModal}
            className="flex gap-2 justify-center items-center bg-blue-500 py-2 px-4 rounded-lg font-semibold text-sm"
          >
            <IoAddCircle size={20} />
            Nova equipe
          </button>
        </div>
      </header>

      {/* Modal */}
      <MachineRegisterModal
        isOpen={isModalOpen}
        title="Nova Equipe"
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
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold"
        >
          Cadastrar
        </button>
      </MachineRegisterModal>
      <DataTable
        value={machineList}
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
          style={{ width: "25%" }}
        ></Column>
        <Column
          field="model"
          header="Modelo"
          sortable
          className="p-datatable-column"
          style={{ width: "20%" }}
        ></Column>

        <Column
          field="manufactureDate"
          header="Fabricação"
          sortable
          className="p-datatable-column"
          style={{ width: "15%" }}
        ></Column>
        <Column
          field="location"
          header="Localização"
          sortable
          className="p-datatable-column"
          style={{ width: "20%" }}
        ></Column>
      </DataTable>
    </main>
  );
}
