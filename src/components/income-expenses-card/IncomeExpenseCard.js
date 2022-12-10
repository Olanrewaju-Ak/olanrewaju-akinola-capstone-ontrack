import React from "react";
import incomeIcon from "../../assets/icons/income.png";
import expenseIcon from "../../assets/icons/expense.png";
import { useState, useEffect } from "react";
import axios from "axios";
import "./IncomeExpenseCard.scss";
import IncomeExpensesChart from "../income-expenses-chart/IncomeExpensesChart";

//Money formatter function
// function moneyFormatter(num) {
// 	let p = num.toFixed(2).split(".");
// 	return (
// 		"$" +
// 		p[0]
// 			.split("")
// 			.reverse()
// 			.reduce(function (acc, num, i, orig) {
// 				return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
// 			}, "") +
// 		"." +
// 		p[1]
// 	);
// }

const IncomeExpenseCard = ({ transaction }) => {
	const [expenses, updateExpenses] = useState([]);
	const [income, updateIncome] = useState([]);

	const getExpenses = async () => {
		const response = await axios.get("http://localhost:8080/api/transactions/expenses");
		// console.log(response.data);
		updateExpenses(response.data);
		return;
	};

	const getIncome = async () => {
		const response = await axios.get("http://localhost:8080/api/transactions/income");
		console.log(response.data);
		updateIncome(response.data);
		return;
	};

	// getIncome();
	useEffect(() => {
		try {
			getExpenses();
			getIncome();
		} catch (error) {}
	}, []);

	// const totalIncome = transactions.reduce((total, item) => {
	// 	const amount = item.amount;
	// 	// console.log(amount);
	// 	const isExpense = item.type === "expense";
	// 	const modifier = isExpense ? 0 : 1;
	// 	const modified = amount * modifier;
	// 	// console.log(modified);
	// 	return total + amount * modifier;
	// }, 0);

	// console.log(income);

	// const amounts = transactions.map((transaction) => [transaction.amount, transaction.type]);
	// console.log(amounts);

	// const income = amounts
	// 	.filter((item) => item[1] === "income")
	// 	.reduce((acc, item) => (acc += item), 0);

	// const expense = transactions.reduce((total, item) => {
	// 	const amount = item.amount;
	// 	const isExpense = item.type === "expense";
	// 	const modifier = isExpense ? 1 : 0;
	// 	return total + amount * modifier;
	// }, 0);

	const totalExpenses = expenses.reduce((total, item) => {
		const amount = item.amount;
		return total + amount;
	}, 0);

	const totalIncome = income.reduce((total, item) => {
		const amount = item.amount;
		return total + amount;
	}, 0);

	// console.log(totalIncome);

	return (
		<section className="income-expense">
			<div className="cards">
				<div className="card card-income">
					<div className="card__icon">
						<img src={incomeIcon} alt="incomeCard" className="card__icon-img" />
					</div>
					<div className="card__detail">
						<p className="card__detail-title">income</p>
						<p className="card__detail-amount">{totalIncome.toFixed(2)}</p>
					</div>
				</div>
				<div className="card card-expense">
					<div className="card__icon">
						<img src={expenseIcon} alt="incomeCard" className="card__icon-img" />
					</div>
					<div className="card__detail">
						<p className="card__detail-title">expense</p>
						<p className="card__detail-amount">{totalExpenses.toFixed(2)}</p>
					</div>
				</div>
			</div>
			<div className="chart-view">
				<IncomeExpensesChart totalIncome={totalIncome} totalExpenses={totalExpenses} />
			</div>
		</section>
	);
};

export default IncomeExpenseCard;
