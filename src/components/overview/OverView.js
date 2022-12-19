import "./OverView.scss";
import React from "react";

const OverView = ({ transactions }) => {
	const balance = transactions.reduce((total, item) => {
		const amount = item.amount;

		const isExpense = item.type === "expense";
		const modifier = isExpense ? -1 : 1;
		const modified = amount * modifier;

		return total + modified;
	}, 0);

	return (
		<div className="overview__section">
			<div className="overview__balance">
				<p className="overview__balance--title">Account Balance</p>
				<p
					className={
						balance < 0 ? "overview__balance--text-bad" : "overview__balance--text-good"
					}
				>
					${balance.toFixed(2)}
				</p>
			</div>
		</div>
	);
};

export default OverView;
