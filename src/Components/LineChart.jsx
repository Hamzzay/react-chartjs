import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import 'chartjs-plugin-annotation';

const generateTemperatureData = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr'];
    const data = {
        labels: [], // Array to hold all the dates
        datasets: [], // Array to hold max and min temperature datasets
    };

    // Generate data for each month
    for (let i = 0; i < months.length; i++) {
        const month = months[i];

        // Generate data for each date in the month
        for (let date = 1; date <= 30; date++) { // Assuming 30 days in each month
            // Generate random temperatures for each date
            const maxTemp = Math.floor(Math.random() * (100 - 50 + 1)) + 50; // Random between 50 and 100
            const minTemp = Math.floor(Math.random() * (50 - 20 + 1)) + 20; // Random between 20 and 50

            // Add date to labels array
            data.labels.push(`${month} ${date}`);

            // Add max and min temperatures to respective datasets
            if (i === 0 && date === 1) {
                data.datasets.push({
                    label: 'Max Temp',
                    data: [maxTemp],
                    borderColor: 'red', // Set your desired color here
                    tension: 0.1,
                });
                data.datasets.push({
                    label: 'Min Temp',
                    data: [minTemp],
                    borderColor: 'blue', // Set your desired color here
                    tension: 0.1,
                });
            } else {
                data.datasets[0].data.push(maxTemp);
                data.datasets[1].data.push(minTemp);
            }
        }
    }

    return data;
};


// Use the generated data
const generatedData = generateTemperatureData();

function LineChart() {

    return (
        <>
            <div style={{ height: "100vh", width: "100%" }}>
                <div style={{ width: "100%" }}>
                    <Line data={generatedData} />
                </div>
            </div>
        </>
    )
}

export default LineChart;