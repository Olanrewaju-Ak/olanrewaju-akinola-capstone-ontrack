import React from "react";
import DoughnutChart from "../doughnut-chart/DoughnutChart";

const IncomeExpensesChart = ({ totalIncome, totalExpenses, transactions }) => {
	const balance = transactions.reduce((total, item) => {
		const amount = item.amount;

		const isExpense = item.type === "expense";
		const modifier = isExpense ? -1 : 1;
		const modified = amount * modifier;
		return total + modified;
	}, 0);

	return (
		<DoughnutChart totalIncome={totalIncome} totalExpenses={totalExpenses} balance={balance} />
	);
};

export default IncomeExpensesChart;
