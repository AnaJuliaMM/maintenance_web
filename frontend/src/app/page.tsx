import { GoTools } from "react-icons/go";
import { LuWarehouse } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";
import { FaUsers } from "react-icons/fa";
import { IoIosListBox } from "react-icons/io";

import { HomeCard } from "./components/HomeCard";
import { Aside } from "./components/Aside";

const navItems = [
  {
    value: "Dashboards",
    href: "",
    icon: <RxDashboard />,
  },
  {
    value: "Ambientes",
    href: "",
    icon: <LuWarehouse />,
  },
  {
    value: "Equipamentos",
    href: "",
    icon: <GoTools />,
  },
  {
    value: "Manutenções",
    href: "",
    icon: <IoIosListBox />,
  },
  {
    value: "Usuários",
    href: "",
    icon: <FaUsers />,
  },
];

export default function Home() {
  return (
    <div className="h-screen flex-col">
      <div className="flex-1 flex">
        <Aside navItems={navItems}/>
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
