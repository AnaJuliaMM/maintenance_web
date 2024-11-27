export type maintenanceType = {
    code: string;
    title: string;
    description: string;
    status: string;
    type: "preventiva" | "corretiva" | "preditiva";
    requisitionDate: string;
    priority: string;
    responsableTeam: string
  };
  