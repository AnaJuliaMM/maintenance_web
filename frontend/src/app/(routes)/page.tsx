"use client";
import React from "react";
import ChartComponent from "../components/charts/ColumnChart";
import DoughnutChart from "../components/charts/DoughnutChart";

import { Title } from "../components/Title";

const PerformanceReports: React.FC = () => {
  // Dados e rótulos para os gráficos
  const maintenanceLabels = [
    "Tempo médio de resolução",
    "Manutenções realizadas",
    "Peças utilizadas",
  ];
  const maintenanceData = [40, 25, 75];
  const maintenanceLabel = "Desempenho das Equipes";

  const costLabels = ["Peças", "Materiais", "Mão de obra", "Serviços"];
  const costData = [1200, 800, 1500, 500]; // valores em unidades monetárias

  const stockLabels = ["Peças em estoque", "Fornecedores", "Período"];
  const stockData = [150, 10, 12];
  const stockLabel = "Relatórios de Estoque";

  const serviceLabels = [
    "Solicitações resolvidas",
    "Serviços terceirizados",
    "Tempo de resposta",
  ];
  const serviceData = [20, 5, 3];
  const serviceLabel = "Serviços Realizados";

  return (
    <main className="flex flex-col p-6 pt-10 w-svw gap-4 h-fit">
      <Title>Relatórios e Métricas</Title>
      <div className="grid grid-cols-2 gap-4 p-4">
        <ChartComponent
          title="Relatórios de Desempenho"
          labels={maintenanceLabels}
          data={maintenanceData}
          label={maintenanceLabel}
          backgroundColor={[
            "rgba(54, 162, 235, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(255, 206, 86, 0.2)",
          ]}
          borderColor={[
            "rgba(54, 162, 235, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(255, 206, 86, 1)",
          ]}
          borderWidth={2}
          beginAtZero={true}
        />
        <ChartComponent
          title="Relatórios de Estoque"
          labels={stockLabels}
          data={stockData}
          label={stockLabel}
          backgroundColor={[
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ]}
          borderColor={[
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ]}
          borderWidth={2}
          beginAtZero={true}
        />
        <DoughnutChart
          title="Controle de custo"
          labels={costLabels}
          data={costData}
          backgroundColors={[
            "rgba(255, 99, 132, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(75, 192, 192, 0.2)",
          ]}
          hoverBackgroundColors={[
            "rgba(255, 99, 132, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(75, 192, 192, 1)",
          ]}
        />
      </div>
    </main>
  );
};

export default PerformanceReports;
