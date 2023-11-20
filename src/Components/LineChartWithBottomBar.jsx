import Chart from 'chart.js';
import 'chartjs-plugin-annotation';
import { useEffect } from 'react';

const LineChartWithBottomBar = () => {
    useEffect(() => {
        const chartData = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [
                {
                    label: 'Data Line',
                    data: [20, 22, 25, 24, 26, 28, 30],
                    borderColor: 'rgba(54, 162, 235, 1)',
                    tension: 0.1,
                },
            ],
        };

        const chartOptions = {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                        },
                    },
                ],
            },
        };

        const createBottomLineAnnotation = (chart) => {
            const ctx = chart.ctx;
            const xAxis = chart.scales['x-axis-0'];
            const yAxis = chart.scales['y-axis-0'];

            const bottomLineY = yAxis.bottom;

            const annotation = {
                type: 'line',
                mode: 'horizontal',
                scaleID: 'y-axis-0',
                value: bottomLineY,
                borderColor: 'rgba(255, 99, 132, 1)', // Adjust the color of the bottom line here
                borderWidth: 2,
            };

            chart.annotation.elements.push(annotation);
        };

        const ctx = document.getElementById('myChart').getContext('2d');

        const chart = new Chart(ctx, {
            type: 'line',
            data: chartData,
            options: chartOptions,
            plugins: [createBottomLineAnnotation],
        });

        return () => {
            chart.destroy();
        };
    }, []);

    return <canvas id="myChart" />;
};

export default LineChartWithBottomBar;
