import { GoTools } from "react-icons/go";
import { LuWarehouse } from "react-icons/lu";
import { FaUsers } from "react-icons/fa";
import { IoIosListBox } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

import { HomeCard } from "./components/HomeCard";
import { TableRow } from "./components/TableRow";

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
    <main className="flex-1 flex flex-col p-10 overflow-y-auto ml-60">
      <h1 className="text-3xl pb-6 text-center">Dashboards</h1>
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
      <div className="bg-gray-500/30 p-5 rounded-lg">
        <div className="grid grid-cols-5 bg-gray-500/50 p-5 rounded-lg font-semibold">
          <p>Ambiente</p>
          <p>Equipamento</p>
          <p>Solicitações</p>
          <p>Atendimento</p>
          <p>Ações</p>
        </div>
        {tableRows.map((obj) => (
          <TableRow
            environment={obj.environment}
            equipment={obj.equipment}
            requisiton={obj.requisiton}
            service={obj.service}
          />
        ))}
      </div>
    </main>
  );
}
