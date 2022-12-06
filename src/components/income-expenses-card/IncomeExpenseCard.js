import React from "react";
import incomeIcon from "../../assets/icons/income.png";
import expenseIcon from "../../assets/icons/expense.png";
import "./IncomeExpenseCard.scss";

const IncomeExpenseCard = () => {
	return (
		<section className="income-expense">
			<div className="card income-card">
				<div className="card__icon">
					<img src={incomeIcon} alt="incomeCard" className="card__icon-img" />
				</div>
				<div className="card__detail">
					<p className="title">income</p>
					<p className="amount">$5000</p>
				</div>
			</div>
			<div className="card expense-card">
				<div className="card__icon">
					<img src={expenseIcon} alt="incomeCard" className="card__icon-img" />
				</div>
				<div className="card__detail">
					<p className="title">expense</p>
					<p className="amount">$10000</p>
				</div>
			</div>
		</section>
	);
};

export default IncomeExpenseCard;
