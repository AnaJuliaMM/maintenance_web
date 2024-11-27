"use client";
import React, { useState, useEffect } from "react";

import { IoAddCircle } from "react-icons/io5";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useRouter } from "next/navigation";
import { RiFileList2Line } from "react-icons/ri";

import MachineRegisterModal from "@/components/modals/Register";
import LoadingContainer from "@/components/LoadingContainer";
import InputLabel from "@/components/InputLabel";
import WarehouseService from "@/services/Warehouse";
import { Item } from "@/Types/Item";

export default function Machine() {
  const router = useRouter();

  const [selectedRow, setSelectedRow] = useState<any>(null);
  const onRowSelect = (event: any) => {
    router.push(`/machines/${event.data.id}`);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    /**
     * Função assíncrona para buscar os itens da API e atualizar o estado do componente.
     *
     * A função tenta realizar uma requisição através de `WarehouseService.get("")` para buscar os dados.
     * Em caso de sucesso, ela atualiza o estado de `items` com os dados obtidos. Se ocorrer um erro,
     * ela atualiza o estado `error` com uma mensagem de falha e loga o erro no console.
     * Independentemente do sucesso ou falha da requisição, o estado `loading` é atualizado para `false`
     * para indicar que o processo de carregamento foi concluído.
     *
     * @async
     * @function
     * @returns {Promise<void>} Retorna uma Promise que resolve quando a operação for concluída.
     */
    const fetchItems = async (): Promise<void> => {
      try {
        let data: any[] = await WarehouseService.get("");
        setItems(data);
      } catch (error) {
        setError(`Falha ao carregar os dados: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  const [formData, setFormData] = useState<Item>({
    name: "",
    description: "",
    type: "",
    acquisitionDate: "",
    supplier: "",
    quantity: 0,
    status: "",
    images: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await WarehouseService.post("", formData);
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
        <h1 className="text-blue-100 text-2xl font-bold">
          Estoque de peças e materiais
        </h1>
        <div className="flex gap-4">
          <button
            onClick={openModal}
            className="flex gap-2 justify-center items-center bg-blue-500 py-2 px-4 rounded-lg font-semibold text-sm"
          >
            <IoAddCircle size={20} />
            Novo registro
          </button>
          <button
            onClick={openModal}
            className="flex gap-2 justify-center items-center bg-purple-700 py-2 px-4 rounded-lg font-semibold text-sm"
          >
            <IoAddCircle size={20} />
            Registrar entrada/saída
          </button>

          <button className="flex gap-2 justify-center items-center bg-pink-600 py-2 px-4 rounded-lg font-semibold text-sm">
            <RiFileList2Line size={20} />
            Gerar Relatório
          </button>
        </div>
      </header>

      {/* Modal */}
      <MachineRegisterModal
        isOpen={isModalOpen}
        title="Cadastrar Peça"
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
        </div>

        <div>
          <InputLabel
            id="description"
            type="text"
            label="Descrição"
            value={formData.description}
            onChange={handleChange}
          />
          <InputLabel
            id="acquisitionDate"
            type="date"
            label="Aquisição"
            value={formData.acquisitionDate}
            onChange={handleChange}
          />
        </div>

        <div className="flex gap-5">
          <InputLabel
            id="supplier"
            type="text"
            label="Fornecedor"
            value={formData.supplier}
            onChange={handleChange}
          />
          <InputLabel
            id="type"
            type="text"
            label="Tipo"
            value={formData.type}
            onChange={handleChange}
          />
        </div>

        <div className="flex gap-5">
          <InputLabel
            id="quantity"
            type="number"
            label="Qtd."
            value={String(formData.quantity)}
            onChange={handleChange}
          />
          <InputLabel
            id="status"
            type="text"
            label="Status"
            value={formData.status}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="images" className="block font-medium">
            Imagens:
          </label>
          <input
            type="file"
            id="images"
            name="images"
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold"
        >
          Cadastrar
        </button>
      </MachineRegisterModal>

      {loading ? (
        <LoadingContainer />
      ) : (
        <DataTable
          value={items}
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
            field="id"
            header="Id"
            sortable
            className="p-datatable-column"
            style={{ width: "10%" }}
          ></Column>
          <Column
            field="name"
            header="Nome"
            sortable
            className="p-datatable-column"
            style={{ width: "20%" }}
          ></Column>
          <Column
            field="description"
            header="Descrição"
            sortable
            className="p-datatable-column"
            style={{ width: "25%" }}
          ></Column>

          <Column
            field="quantity"
            header="Qtd"
            sortable
            className="p-datatable-column"
            style={{ width: "10%" }}
          ></Column>
          <Column
            field="status"
            header="Status"
            sortable
            className="p-datatable-column"
            style={{ width: "20%" }}
          ></Column>
        </DataTable>
      )}
    </main>
  );
}
