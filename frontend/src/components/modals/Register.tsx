import React from "react";

import { Title } from "../../app/components/Title";
import { IoIosAddCircle } from "react-icons/io";

interface MachineRegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const MachineRegisterModal: React.FC<MachineRegisterModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
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
            <IoIosAddCircle color={"#d2e2f7"} size={25} />
            <Title>{title}</Title>
          </div>
          <button onClick={onClose} className="text-white hover:text-gray-900">
            X
          </button>
        </div>

        <form className="space-y-4 register-form" onSubmit={handleSubmit}>
          {children}
        </form>
      </div>
    </div>
  );
};

export default MachineRegisterModal;
