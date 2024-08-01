import React from "react";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";

export const DataTable = () => {
  const tableRows = [
    {
      environment: "Laboratório de Informática",
      equipment: "Computador",
      requisiton: "Troca de teclado",
      service: "2024-07-01",
    },
    {
      environment: "Escritório",
      equipment: "Impressora",
      requisiton: "Reposição de toner",
      service: "2024-07-02",
    },
    {
      environment: "Sala de Reuniões",
      equipment: "Projetor",
      requisiton: "Ajuste de foco",
      service: "2024-07-03",
    },
    {
      environment: "Biblioteca",
      equipment: "Scanner",
      requisiton: "Atualização de software",
      service: "2024-07-04",
    },
    {
      environment: "Laboratório de Física",
      equipment: "Osciloscópio",
      requisiton: "Calibração",
      service: "2024-07-05",
    },
  ];

  return (
    <table className="w-full data-table">
      <thead>
        <tr>
          <th>Ambiente</th>
          <th>Equipamento</th>
          <th>Solicitações</th>
          <th>Atendimento</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody >
        {tableRows.map((obj) => (
          <tr>
            <td>{obj.environment}</td>
            <td>{obj.equipment}</td>
            <td>{obj.requisiton}</td>
            <td>{obj.service}</td>
            <td>
              <div className="flex items-center  gap-1">
                <MdOutlineEdit className="cursor-pointer" size={20} />
                <MdDeleteOutline className="cursor-pointer" size={20} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};



