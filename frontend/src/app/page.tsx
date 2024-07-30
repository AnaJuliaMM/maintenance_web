import { GoTools } from "react-icons/go";
import { LuWarehouse } from "react-icons/lu";
import { FaUsers } from "react-icons/fa";
import { IoIosListBox } from "react-icons/io";

import { HomeCard } from "./components/HomeCard";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col p-6">
      <h1 className="text-3xl pb-6 text-center">Manutenções</h1>
      <div className="grid grid-cols-4 gap-3 p-6">
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
    </main>
  );
}
