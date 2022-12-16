import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ totalIncome, totalExpenses, balance }) => {
	const data = {
		labels: ["Expenses", "Balance"],
		datasets: [
			{
				label: "cash flow",
				data: [totalExpenses, balance],
				backgroundColor: ["#CC3333", "#02457a"],
				borderColor: ["#66CBA6", "#66CBA6"],
				hoverBackgroundColor: ["#ff0000cc", "#02457a"],
				spacing: 5,
				hoverOffset: 4
			}
		]
	};

	const plugin = {
		id: "increase-legend-spacing",
		beforeInit(chart) {
			// Get reference to the original fit function
			const originalFit = chart.legend.fit;

			// Override the fit function
			chart.legend.fit = function fit() {
				// Call original function and bind scope in order to use `this` correctly inside it
				originalFit.bind(chart.legend)();
				// Change the height as suggested in another answers
				this.height += 20;
			};
		}
	};

	return (
		<div className="chart-block">
			<Doughnut data={data} height={400} plugins={[plugin]}></Doughnut>
		</div>
	);
};

export default DoughnutChart;
