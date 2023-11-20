const getColor = (xval) => {
    if (xval > 12) {
      return "#20BA81";
    } else if (xval === 9) {
      return "#ED4040";
    } else {
      return "#EDC240";
    }
  };
  
  
let width, height, gradient;
function getGradient(ctx, chartArea) {
  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;
  if (!gradient || width !== chartWidth || height !== chartHeight) {
    // Create the gradient because this is either the first render
    // or the size of the chart has changed
    width = chartWidth;
    height = chartHeight;
    gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, "#20BA81");
    gradient.addColorStop(0.3, "#2BC77F");
    gradient.addColorStop(0.7, "#EDC240");
    gradient.addColorStop(1, "#EA3943");
  }

  return gradient;
}

const generatePerciptation = () => {
    const data = {
      labels: Array.from({ length: 20 }, (_, i) => i + 1), // Array to hold all the dates
      datasets: [
        {
          type: "line",
          data: [
            2.7, 3.3, 3.8, 4.2, 4, 4.5, 5, 5.5, 6, 6.5, 6, 6.6, 7, 8, 8.2, 8.5, 8,
            7.8, 7.5, 9,
          ],
          tension: 0.1,
          borderDash: [15, 10],
          color: "#3861FB",
        },
        {
          type: "line",
          data: [
            4.1, 4.2, 4.5, 4, 5, 5.1, 5.2, 5.3, 5.4, 6, 6.3,6.8, 7, 7.2, 7.6, 7.8, 8
          ],
          tension: 0.1,
          color: "#000000",
        },
        {
          type: "line",
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          borderWidth: 30,
          segment: {
            borderColor: function (context) {
              return getColor(context.p1.parsed.x);
            },
          },
        },
      ], 
    };
  
    return data;
};

const generateTemperatureData = () => {
  const months = ["Jan", "Feb", "Mar", "Apr"];
  const data = {
    labels: [], // Array to hold all the dates
    datasets: [], // Array to hold max and min temperature datasets
  };

  // Generate data for each month
  for (let i = 0; i < months.length; i++) {
    const month = months[i];
    // Generate data for each date in the month
    for (let date = 1; date <= 5; date++) {
      // Assuming 30 days in each month
      // Generate random temperatures for each date
      const maxTemp = Math.floor(Math.random() * (80 - 55 + 1)) + 55; // Random between 50 and 100
      const minTemp = Math.floor(Math.random() * (50 - 35 + 1)) + 35; // Random between 20 and 50

      // Add date to labels array
      if (date == 1) {
        data.labels.push(`${month} `);
      } else {
        data.labels.push(` `);
      }

      // Add max and min temperatures to respective datasets
      if (i === 0 && date === 1) {
        data.datasets.push({
          label: "Max Temp",
          data: [maxTemp],
          tension: 0.1,
          borderColor: function (context) {
            const chart = context.chart;
            const { ctx, chartArea } = chart;

            if (!chartArea) {
              // This case happens on initial chart load
              return;
            }
            return getGradient(ctx, chartArea);
          },
        });
        data.datasets.push({
          label: "Min Temp",
          data: [minTemp],
          tension: 0.1,
          borderColor: function (context) {
            const chart = context.chart;
            const { ctx, chartArea } = chart;

            if (!chartArea) {
              // This case happens on initial chart load
              return;
            }
            return getGradient(ctx, chartArea);
          },
          legend: false,
        });
      } else {
        data.datasets[0].data.push(maxTemp);
        data.datasets[1].data.push(minTemp);
      }
    }
  }

  return data;
};

export {
    generatePerciptation,
    generateTemperatureData
}