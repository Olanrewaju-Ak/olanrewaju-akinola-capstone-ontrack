import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import "./HomePage.scss";
import OverView from "../../components/overview/OverView";
import IncomeExpenseCard from "../../components/income-expenses-card/IncomeExpenseCard";
import IncomeExpensesChart from "../../components/income-expenses-chart/IncomeExpensesChart";
import TransactionsPage from "../transactions-page/TransactionsPage";

const URL = process.env.REACT_APP_BACKEND_URL;
const PORT = process.env.REACT_APP_PORT;

const HomePage = () => {
	const [transactions, updateTransactions] = useState([]);

	const [expenses, updateExpenses] = useState([]);
	const [income, updateIncome] = useState([]);

	// GET ALL TRANSACTIONS
	const getTransactions = async () => {
		const response = await axios.get(`${URL}${PORT}/api/transactions`);
		updateTransactions(response.data);
		return;
	};

	useEffect(() => {
		try {
			getTransactions();
		} catch (error) {}
	}, []);

	// GET ALL EXPENSES
	const getExpenses = async () => {
		const response = await axios.get(`${URL}${PORT}/api/transactions/expenses`);

		updateExpenses(response.data);
		return;
	};

	// GET ALL INCOME TRANSCATIONS
	const getIncome = async () => {
		const response = await axios.get(`${URL}${PORT}/api/transactions/income`);

		updateIncome(response.data);
		return;
	};

	useEffect(() => {
		try {
			getExpenses();
			getIncome();
		} catch (error) {}
	}, [transactions]);

	const totalExpenses = expenses.reduce((total, item) => {
		const amount = item.amount;
		return total + amount;
	}, 0);

	const totalIncome = income.reduce((total, item) => {
		const amount = item.amount;
		return total + amount;
	}, 0);

	return (
		<div className="home-page">
			<div className="home-page__top">
				<div className="home-page__top-left">
					<OverView transactions={transactions} />
					<IncomeExpenseCard totalIncome={totalIncome} totalExpenses={totalExpenses} />
				</div>
				<div className="home-page__top-right chart-view">
					<IncomeExpensesChart
						totalIncome={totalIncome}
						totalExpenses={totalExpenses}
						transactions={transactions}
					/>
				</div>
			</div>

			<TransactionsPage
				transactions={transactions}
				getTransactions={getTransactions}
				updateTransactions={updateTransactions}
			/>
		</div>
	);
};

export default HomePage;
