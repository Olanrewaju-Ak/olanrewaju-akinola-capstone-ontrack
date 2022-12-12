import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ transaction, totalIncome, totalExpenses }) => {
	const data = {
		labels: ["Income", "Expenses"],
		datasets: [
			{
				label: "cash flow",
				data: [totalIncome, totalExpenses],
				backgroundColor: ["#66CBA6", "#CC3333"],
				borderColor: ["rgb(35, 35, 36)", "rgb(35, 35, 36)"],
				hoverBackgroundColor: ["#00a86b", "#ff0000cc"],
				spacing: 5,
				hoverOffset: 4
			}
		]
	};

	return (
		<div className="chart-block">
			<Doughnut data={data} height={400}></Doughnut>
		</div>
	);
};

export default DoughnutChart;
