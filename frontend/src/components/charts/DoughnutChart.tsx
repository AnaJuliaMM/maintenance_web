import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

interface DoughnutChartProps {
    title:string;
    labels: string[];
    data: number[];
    backgroundColors: string[];
    hoverBackgroundColors: string[];
    cutoutPercentage?: string; // opcional, com valor padrão
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({
    title,
    labels,
    data,
    backgroundColors,
    hoverBackgroundColors,
    cutoutPercentage = '60%',
}) => {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const chartData = {
            labels: labels,
            datasets: [
                {
                    data: data,
                    backgroundColor: backgroundColors,
                    hoverBackgroundColor: hoverBackgroundColors,
                },
            ],
        };

        const chartOptions = {
            cutout: cutoutPercentage,
        };

        setChartData(chartData);
        setChartOptions(chartOptions);
    }, [labels, data, backgroundColors, hoverBackgroundColors, cutoutPercentage]);

    return (
        <div className="card flex flex-col justify-content-center">
            <h3 className='text-center'>{title}</h3>
            <Chart type="doughnut" data={chartData} options={chartOptions} className="w-full md:w-30rem" />
        </div>
    );
};

export default DoughnutChart;
