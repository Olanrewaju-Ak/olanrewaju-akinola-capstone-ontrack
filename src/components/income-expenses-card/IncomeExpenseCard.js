import React from "react";
import incomeIcon from "../../assets/icons/income.png";
import expenseIcon from "../../assets/icons/expense.png";
import "./IncomeExpenseCard.scss";

//Money formatter function
function moneyFormatter(num) {
	let p = num.toFixed(2).split(".");
	return (
		"$ " +
		p[0]
			.split("")
			.reverse()
			.reduce(function (acc, num, i, orig) {
				return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
			}, "") +
		"." +
		p[1]
	);
}

const IncomeExpenseCard = ({ transactions }) => {
	const income = transactions.reduce((total, item) => {
		const amount = item.amount;
		const isExpense = item.type === "expense";
		const modifier = isExpense ? 0 : 1;
		return total + amount * modifier;
	}, 0);

	console.log(income);

	// const amounts = transactions.map((transaction) => [transaction.amount, transaction.type]);
	// console.log(amounts);

	// const income = amounts
	// 	.filter((item) => item[1] === "income")
	// 	.reduce((acc, item) => (acc += item), 0);

	const expense = transactions.reduce((total, item) => {
		const amount = item.amount;
		const isIncome = item.type === "income";
		const modifier = isIncome ? 0 : 1;
		return total + amount * modifier;
	}, 0);

	// console.log(expense);

	return (
		<section className="income-expense">
			<div className="card income-card">
				<div className="card__icon">
					<img src={incomeIcon} alt="incomeCard" className="card__icon-img" />
				</div>
				<div className="card__detail">
					<p className="title">income</p>
					<p className="amount">{moneyFormatter(income)}</p>
				</div>
			</div>
			<div className="card expense-card">
				<div className="card__icon">
					<img src={expenseIcon} alt="incomeCard" className="card__icon-img" />
				</div>
				<div className="card__detail">
					<p className="title">expense</p>
					<p className="amount">{moneyFormatter(expense)}</p>
				</div>
			</div>
		</section>
	);
};

export default IncomeExpenseCard;
