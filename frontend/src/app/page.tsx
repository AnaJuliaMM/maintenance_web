import Image from "next/image";
import { GoTools } from "react-icons/go";
import { LuWarehouse } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";
import { FaUsers } from "react-icons/fa";
import { IoIosListBox } from "react-icons/io";
import { HomeCard } from "./components/HomeCard";

import { NavIconItem } from "./components/NavIconItem";

export default function Home() {
  return (
    <div className="h-screen flex-col">
      <div className="flex-1 flex">
        <aside className="w-64 p-6 bg-gray-950/35">
          <Image
            src={"/image/image.png"}
            alt="Logo"
            width={300}
            height={300}
            className="w-full"
          ></Image>
          <nav className="flex flex-col space-y-4 mt-8">
            <NavIconItem href="" icon={<RxDashboard />} value="Dashboards" />
            <NavIconItem href="" icon={<LuWarehouse />} value="Ambientes" />
            <NavIconItem href="" icon={<GoTools />} value="Equipamentos" />
            <NavIconItem href="" icon={<IoIosListBox />} value="Manutenções" />
            <NavIconItem href="" icon={<FaUsers />} value="Usuários" />
          </nav>
        </aside>
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
              value={500}
              category="Equipamentos"
              color="bg-slate-200/60"
              icon={<GoTools size={30} />}
            />
          </div>
        </main>
      </div>
      <footer className="p-6  text-center">
        Todos os direitos reservados &copy; 2024
      </footer>
    </div>
  );
}
