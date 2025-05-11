import React from "react";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title
} from "chart.js";

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend, Title);

function Statistics() {
  const genreData = {
    labels: ["Fiction", "Non-Fiction", "Fantasy", "Sci-Fi", "Biography"],
    datasets: [
      {
        label: "Books by Genre",
        data: [5, 3, 4, 2, 1],
        backgroundColor: [
          "#4CAF50",
          "#2196F3",
          "#FFC107",
          "#9C27B0",
          "#FF5722"
        ],
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };

  const monthlyData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Books Added",
        data: [2, 3, 1, 4, 5],
        backgroundColor: "#42A5F5",
        borderColor: "#1E88E5",
        borderWidth: 1,
        borderRadius: 5,
        barThickness: 40,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
        labels: {
          font: {
            size: 14,
            family: "'Segoe UI', sans-serif"
          }
        }
      },
      title: {
        display: true,
        text: "Books by Genre",
        font: {
          size: 18
        },
        padding: {
          top: 10,
          bottom: 20
        }
      }
    }
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: "Books Added Per Month",
        font: {
          size: 18
        },
        padding: {
          top: 10,
          bottom: 20
        }
      },
      tooltip: {
        backgroundColor: "#222",
        titleFont: { size: 14 },
        bodyFont: { size: 13 }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1
        },
        title: {
          display: true,
          text: "Books"
        }
      },
      x: {
        title: {
          display: true,
          text: "Month"
        }
      }
    }
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm" style={{ height: '600px' }}>
            <div className="card-body d-flex justify-content-center align-items-center">
              <Pie data={genreData} options={pieOptions} />
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm" style={{ height: '600px' }}>
            <div className="card-body d-flex justify-content-center align-items-center">
              <Bar data={monthlyData} options={barOptions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
