import React from "react";

import { Title } from "../Title";
import { MdBookmarkAdd } from "react-icons/md";

interface MachineRegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData: {
    name: string;
    type: string;
    model: string;
    manufactureDate: string;
    serialNumber: string;
    location: string;
    images: File | null;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const MachineRegisterModal: React.FC<MachineRegisterModalProps> = ({
  isOpen,
  onClose,
  formData,
  handleChange,
  handleSubmit,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-gray-700 rounded-lg shadow-lg m-auto z-10  p-10">
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center gap-4">
            <MdBookmarkAdd color={"#d2e2f7"} size={25} />
            <Title>Cadastrar Máquina</Title>
          </div>
          <button onClick={onClose} className="text-white hover:text-gray-900">
            X
          </button>
        </div>
        <form className="space-y-4 register-form" onSubmit={handleSubmit}>
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
              <div>
                <label htmlFor="serialNumber" className="block font-medium">
                  Numero de Série:
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
            </div>
          </div>

          <div className="flex gap-5">
            <div>
              <label htmlFor="manufactureDate" className="block font-medium">
                Data de Fabricação:
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
            <div>
              <label htmlFor="type" className="block font-medium">
                Tipo:
              </label>
              <input
                type="text"
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="flex gap-5">
            <div>
              <label htmlFor="model" className="block font-medium">
                Modelo:
              </label>
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
              <label htmlFor="location" className="block font-medium">
                Localização:
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
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
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default MachineRegisterModal;
