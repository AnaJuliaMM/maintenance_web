"use client";
import React, { useState } from "react";
import Link from "next/link";

import { IoAddCircle } from "react-icons/io5";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useRouter } from "next/navigation";
import { RiFileList2Line } from "react-icons/ri";
import { Dropdown } from "primereact/dropdown";

import { Title } from "@/app/components/Title";
import { maintenanceList } from "@/app/constants/maintenance";
import MachineRegisterModal from "@/app/components/modals/Register";
import { SelectOption } from "@/app/components/SelectOption";

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
  const [maintenanceType, setMaintenanceType] = useState<string>("");
  const [responsibleTeam, setResponsibleTeam] = useState<string>("");
  const [priority, setPriority] = useState<string>("");

  // Functions
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const onRowSelect = (event: any) => {
    router.push(`/maintenances/${event.data.code}`);
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
    setIsModalOpen(false);
  };

  return (
    <main className="flex flex-col p-6 pt-10 w-svw gap-4 h-fit">
      <Title>Manutenções</Title>
      <header className="flex gap-4 py-2">
        <button
          onClick={openModal}
          className="flex gap-2 justify-center items-center bg-blue-500 py-2 px-4 rounded-lg font-semibold text-sm"
        >
          <IoAddCircle size={20} />
          Cadastrar Solicitação
        </button>

        <button className="flex gap-2 justify-center items-center bg-pink-600 py-2 px-4 rounded-lg font-semibold text-sm">
          <RiFileList2Line size={20} />
          Gerar Relatório
        </button>
      </header>

      {/* Modal */}
      <MachineRegisterModal
        isOpen={isModalOpen}
        title="Nova Solicitação"
        onClose={closeModal}
        handleSubmit={handleSubmit}
      >
        {/* Title, type and priority */}
        <div>
          <div>
            <label htmlFor="serialNumber" className="block font-medium">
              Título:
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

          <SelectOption
            id="maintenanceType"
            label="Tipo"
            value={maintenanceType}
            onChange={(e) => setMaintenanceType(e.target.value)}
            options={[
              { value: "corretiva", label: "Corretiva" },
              { value: "preventiva", label: "Preventiva" },
              { value: "preditiva", label: "Preditiva" },
            ]}
          />

          <SelectOption
            id="priority"
            label="Prioridade"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            options={[
              { value: "P1", label: "P1" },
              { value: "P2", label: "P2" },
              { value: "P3", label: "P3" },
            ]}
          />
        </div>

        {/* Requisition date, priority and responsable team*/}
        <div>
          <div>
            <label htmlFor="manufactureDate" className="block font-medium">
              Data de Requisição:
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

          <SelectOption
            id="responsibleTeam"
            label="Equipe"
            value={responsibleTeam}
            onChange={(e) => setResponsibleTeam(e.target.value)}
            options={[
              { value: "teamA", label: "Equipe A" },
              { value: "teamB", label: "Equipe B" },
              { value: "teamC", label: "Equipe C" },
            ]}
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="images" className="block font-medium">
            Descrição:
          </label>
          <input
            type="textarea"
            id="description"
            name="description"
            onChange={handleChange}
            required
            className="w-3/4"
          />
        </div>

        {/* Files */}
        <div>
          <label htmlFor="images" className="block font-medium">
            File:
          </label>
          <input
            type="file"
            id="files"
            name="files"
            onChange={handleChange}
            required
            className="w-3/4"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold"
        >
          Submit
        </button>
      </MachineRegisterModal>

      <section>
        <Link href="/maintenances/" className="flex cursor-pointer">
          <Title>Histórico de Manutenções</Title>
        </Link>

        <DataTable
          value={maintenanceList}
          selectionMode="single"
          selection={selectedRow}
          onSelectionChange={(e) => setSelectedRow(e.value)}
          onRowSelect={onRowSelect}
          metaKeySelection={false}
          dataKey="serialNumber"
          paginator
          rows={2}
          paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
          currentPageReportTemplate="Clique para Ler mais"
          className="bg-zinc-400/10 rounded-lg p-4 p-datatable"
          tableStyle={{ lineBreak: "anywhere" }}
        >
          <Column
            field="requisitionDate"
            header="Data"
            sortable
            className="p-datatable-column"
          ></Column>
          <Column
            field="description"
            header="Descrição"
            sortable
            className="p-datatable-column"
            style={{ width: "35%" }}
          ></Column>
          <Column
            field="type"
            header="Tipo"
            sortable
            className="p-datatable-column"
          ></Column>
          <Column
            field="responsableTeam"
            header="Equipe"
            sortable
            className="p-datatable-column"
          ></Column>
        </DataTable>
      </section>
    </main>
  );
}
