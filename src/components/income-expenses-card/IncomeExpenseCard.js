import React from "react";
import incomeIcon from "../../assets/icons/Income.svg";
import expenseIcon from "../../assets/icons/expense.svg";

import "./IncomeExpenseCard.scss";

const IncomeExpenseCard = ({ totalIncome, totalExpenses }) => {
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
		</section>
	);
};

export default IncomeExpenseCard;
