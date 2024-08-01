import { GoTools } from "react-icons/go";
import { LuWarehouse } from "react-icons/lu";
import { FaUsers } from "react-icons/fa";
import { IoIosListBox } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

import { HomeCard } from "./components/HomeCard";
import { DataTable } from "./components/DataTable";
import BarChartComponent from "./components/BarChart";

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
    <main className="flex-1 flex flex-col p-10 ml-60 mb-20">
      <h1 className="text-3xl pb-6 text-center">Dashboard</h1>
      <div className="max-h-svh overflow-y-auto">
        <div className="grid grid-cols-4 gap-3 pb-5">
          <HomeCard
            value={200}
            category="Ambientes"
            color="bg-pink-600/90"
            icon={<LuWarehouse size={30} />}
          />
          <HomeCard
            value={1454}
            category="Equipamentos"
            color="bg-blue-500/60"
            icon={<GoTools size={30} />}
          />
          <HomeCard
            value={100}
            category="Manutenções"
            color="bg-purple-500/60"
            icon={<IoIosListBox size={30} />}
          />
          <HomeCard
            value={150}
            category="Usuários"
            color="bg-slate-200/60"
            icon={<FaUsers size={30} />}
          />
        </div>
        <DataTable />
        <BarChartComponent />
      </div>
    </main>
  );
}
6;
