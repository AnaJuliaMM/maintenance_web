import { maintenanceType } from "../types/maintenance";

export const maintenanceList: maintenanceType[] = [
  {
    code: "MT-001",
    title: "Troca de Filtro de Ar",
    description: "Substituir o filtro de ar do sistema de ventilação.",
    type: "preventiva", 
    status: "em andamento",
    requisitionDate: "2024-08-01",
    priority: "alta",
    responsableTeam: "Equipe de Manutenção Geral",
  },
  {
    code: "MT-002",
    title: "Reparo de Vazamento de Água",
    description:
      "Consertar o vazamento identificado na tubulação do segundo andar.",
    type: "corretiva", 
    status: "em andamento",
    requisitionDate: "2024-08-05",
    priority: "média",
    responsableTeam: "Equipe de Hidráulica",
  },
  {
    code: "MT-003",
    title: "Calibração de Equipamentos",
    description:
      "Realizar a calibração dos instrumentos de medição de temperatura.",
    type: "preventiva", 
    status: "em andamento",
    requisitionDate: "2024-08-10",
    priority: "baixa",
    responsableTeam: "Equipe de Instrumentação",
  },
  {
    code: "MT-004",
    title: "Substituição de Motor",
    description:
      "Trocar o motor da máquina de impressão que apresentou falhas constantes.",
    type: "corretiva", 
    status: "em andamento",
    requisitionDate: "2024-08-12",
    priority: "alta",
    responsableTeam: "Equipe de Manutenção de Máquinas",
  },
  {
    code: "MT-005",
    title: "Inspeção de Sistema de Segurança",
    description: "Verificar o funcionamento dos sistemas de câmeras e alarmes.",
    type: "preditiva", 
    status: "em andamento",
    requisitionDate: "2024-08-15",
    priority: "média",
    responsableTeam: "Equipe de Segurança",
  },
];
