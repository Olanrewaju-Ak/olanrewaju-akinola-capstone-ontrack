import "./BarChart.scss";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
	Chart as ChartJS,
	BarElement,
	CategoryScale,
	LinearScale,
	Tooltip,
	Legend
} from "chart.js/auto";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = ({
	totalFood,
	totalHousing,
	totalTransport,
	totalPersonal,
	totalLifestyle,
	totalUtility,
	totalMedical,
	totalOthers
}) => {
	const data = {
		labels: [
			"Food",
			"Housing",
			"Transportation",
			"Personal",
			"Lifestyle",
			"Utility",
			"Medical",
			"Others"
		],
		datasets: [
			{
				label: "Total Expenses",
				data: [
					totalFood,
					totalHousing,
					totalTransport,
					totalPersonal,
					totalLifestyle,
					totalUtility,
					totalMedical,
					totalOthers
				],
				backgroundColor: [
					"#66CBA6",
					"#78502d",
					"#fcc203",
					"#3f5c5a",
					"#de914b",
					"#896c08",
					"#a1c770",
					"#3d3635"
				],
				borderColor: ["rgb(35, 35, 36)"],
				borderWidth: 2,
				hoverBackgroundColor: ["#00a86b", "#ff0000cc"],
				hoverOffset: 4,
				barThickness: 12
			}
		]
	};

	const options = {
		responsive: true,
		maintainAspectRatio: false
	};
	return (
		<div className="bar-chart__block">
			<Bar data={data} options={options} height={250}></Bar>
		</div>
	);
};

export default BarChart;
