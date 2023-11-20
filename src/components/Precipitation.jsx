import { Line } from "react-chartjs-2";
import React from "react";
import { generatePerciptation } from "../utils";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

// Use the generated data
const generatedData = generatePerciptation();

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
      max: 10,
      ticks: {
        // forces step size to be 50 units
        stepSize: 2,
      },
    },
  },
};

const Precipitation = () => {
  return (
    <>
      <div className="card">
        <div className="title color-light">
          Growing Season Cumulative Precipitation
        </div>
        <div className="chart">
          <Line options={options} data={generatedData} />
        </div>
      </div>
    </>
  );
};

export default Precipitation;
