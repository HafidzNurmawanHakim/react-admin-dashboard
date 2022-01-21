import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "./chart.scss";

let smooth = false;

const actions = [
  {
    name: "Fill: false (default)",
    handler: (chart) => {
      chart.data.datasets.forEach((dataset) => {
        dataset.fill = false;
      });
      chart.update();
    },
  },
  {
    name: "Fill: origin",
    handler: (chart) => {
      chart.data.datasets.forEach((dataset) => {
        dataset.fill = "origin";
      });
      chart.update();
    },
  },
  {
    name: "Fill: start",
    handler: (chart) => {
      chart.data.datasets.forEach((dataset) => {
        dataset.fill = "start";
      });
      chart.update();
    },
  },
  {
    name: "Fill: end",
    handler: (chart) => {
      chart.data.datasets.forEach((dataset) => {
        dataset.fill = "end";
      });
      chart.update();
    },
  },
  {
    name: "Smooth",
    handler(chart) {
      smooth = !smooth;
      chart.options.elements.line.tension = smooth ? 0.4 : 0;
      chart.update();
    },
  },
];

const ChartSection = () => {
  return (
    <div className="chart">
      <h3>Grafik</h3>
      <div className="box">
        <Line
          data={{
            labels: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"],
            datasets: [
              {
                label: "Last Week",
                data: [0, 3, 5, 12, 25, 18, 10],
                backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(255, 159, 64, 0.2)"],
                borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"],
                borderWidth: 2,
                fill: "start",
                tension: 0.4,
              },
              {
                label: "This Week",
                data: [0, 2, 8, 19, 11, 33],
                backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(255, 159, 64, 0.2)"],
                borderColor: ["rgba(rgb(149, 205, 65, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"],
                borderWidth: 2,
                fill: "start",
                tension: 0.4,
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            plugins: {},
            legend: {
              display: true,
            },
            pointHitRadius: 2,
          }}
        />
      </div>
    </div>
  );
};

export default ChartSection;
