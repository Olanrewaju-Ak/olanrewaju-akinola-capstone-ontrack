import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ transaction, totalIncome, totalExpenses }) => {
	const data = {
		labels: ["Income", "Expenses"],
		datasets: [
			{
				label: "cash flow",
				data: [totalIncome, totalExpenses],
				backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
				borderColor: ["rgb(35, 35, 36)", "rgb(35, 35, 36)"],
				hoverBackgroundColor: ["rgb(194, 8, 8)", "rgb(7, 105, 171)"],
				spacing: 5,
				hoverOffset: 10
			}
		]
	};

	return <Doughnut data={data} height={400} />;
};

export default DoughnutChart;
