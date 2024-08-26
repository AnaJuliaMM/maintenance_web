import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";

interface ChartComponentProps {
  title: string;
  labels: string[];
  data: number[];
  label: string;
  backgroundColor?: string[];
  borderColor?: string[];
  borderWidth?: number;
  beginAtZero?: boolean;
}

const ChartComponent: React.FC<ChartComponentProps> = ({
  title,
  labels,
  data,
  label,
  backgroundColor = [
    "rgba(255, 159, 64, 0.2)",
    "rgba(75, 192, 192, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(153, 102, 255, 0.2)",
  ],
  borderColor = [
    "rgb(255, 159, 64)",
    "rgb(75, 192, 192)",
    "rgb(54, 162, 235)",
    "rgb(153, 102, 255)",
  ],
  borderWidth = 1,
  beginAtZero = true,
}) => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const dataConfig = {
      labels: labels,
      datasets: [
        {
          label: label,
          data: data,
          backgroundColor: backgroundColor,
          borderColor: borderColor,
          borderWidth: borderWidth,
        },
      ],
    };
    const optionsConfig = {
      scales: {
        y: {
          beginAtZero: beginAtZero,
        },
      },
    };

    setChartData(dataConfig);
    setChartOptions(optionsConfig);
  }, [
    labels,
    data,
    label,
    backgroundColor,
    borderColor,
    borderWidth,
    beginAtZero,
  ]);

  return (
    <div className="card">
      <h3 className='text-center'>{title}</h3>
      <Chart type="bar" data={chartData} options={chartOptions} />
    </div>
  );
};

export default ChartComponent;
