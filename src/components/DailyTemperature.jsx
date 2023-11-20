import { Line } from "react-chartjs-2";
import InfoIcon from "../assets/infoIcon.svg";
import { Chart, registerables } from "chart.js";
import { generateTemperatureData } from "../utils/index.js";
Chart.register(...registerables);

// Use the generated data
const generatedData = generateTemperatureData();

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: false,
    },
    legend: {
      display: false,
    },
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  scales: {
    y: {
      min: 0,
      max: 100,
      ticks: {
        // forces step size to be 50 units
        stepSize: 25,
      },
    },
  },
};

function DailyTemperature() {
  return (
    <>
      <div className="card">
        <div className="title">Daily Temperature Risk</div>
        <div className="chart">
          <Line options={options} data={generatedData} />
        </div>
        <div className="information">
          <img src={InfoIcon} alt="information icon" />
          <div>
            Your growing season is from Feb 1 - May 1. Ideal temperature for
            Coffee in this region is between 37 F and 80 F.
          </div>
        </div>
      </div>
    </>
  );
}

export default DailyTemperature;
