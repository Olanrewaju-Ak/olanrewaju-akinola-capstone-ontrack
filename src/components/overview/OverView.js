import "./OverView.scss";
import React from "react";

const OverView = ({ transactions }) => {
	// console.log(transactions);
	const balance = transactions.reduce((total, item) => {
		const amount = item.amount;

		const isExpense = item.type === "expense";
		const modifier = isExpense ? -1 : 1;
		const modified = amount * modifier;
		// console.log(modified);
		return total + modified;
	}, 0);
	// console.log(balance);
	return (
		<div className="overview__section">
			<div className="overview__balance">
				<p className="overview__balance--title">Account Balance</p>
				<p
					className={
						balance < 0 ? "overview__balance--text-bad" : "overview__balance--text-good"
					}
				>
					${balance}
				</p>
			</div>
		</div>
	);
};

export default OverView;
