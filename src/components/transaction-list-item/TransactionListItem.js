import "./TransactionListItem.scss";
import React from "react";

const TransactionListItem = ({ transaction }) => {
	return (
		<ul>
			<li
				key={transaction.id}
				className={
					transaction.type === "income"
						? "transaction-list__item income"
						: "transaction-list__item expense"
				}
			>
				<img
					src="https://img.icons8.com/ios/50/000000/dining-room.png"
					alt="icon"
					className="icon"
				/>
				<span>{transaction.description}</span>
				<span>
					{transaction.type === "income" ? "+" : "-"}${transaction.amount}
				</span>
			</li>
		</ul>
	);
};

export default TransactionListItem;
