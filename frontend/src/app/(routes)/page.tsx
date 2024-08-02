import { GoTools } from "react-icons/go";
import { LuWarehouse } from "react-icons/lu";
import { FaUsers } from "react-icons/fa";
import { IoIosListBox } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

import { HomeCard } from "../components/HomeCard";
import { DataTable } from "../components/DataTable";
import BarChartComponent from "../components/BarChart";
import { Aside } from "../components/Aside";

export default function Home() {
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
    <main className="flex flex-col">
      <h1 className="text-3xl pb-6 text-center">Dashboard</h1>

    </main>
  );
}

