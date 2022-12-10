import React from "react";
import DoughnutChart from "../doughnut-chart/DoughnutChart";

const IncomeExpensesChart = ({ totalIncome, totalExpenses }) => {
	return <DoughnutChart totalIncome={totalIncome} totalExpenses={totalExpenses} />;
};

export default IncomeExpensesChart;
