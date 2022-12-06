import "./OverView.scss";
import React from "react";

const OverView = ({ transactions }) => {
	// const amounts = transactions.map((transaction) => transaction.amount);
	const total = transactions.reduce((total, item) => {
		const amount = item.amount;
		const isExpense = item.type === "expense";
		const modifier = isExpense ? -1 : 1;
		return total + amount * modifier;
	}, 0);

	return (
		<div className="overview">
			<div className="overview-balance">
				Account Balance
				<span>${total}</span>
			</div>
		</div>
	);
};

export default OverView;
