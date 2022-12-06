import "./TransactionListItem.scss";
import React from "react";

const TransactionListItem = ({ payload }) => {
	return (
		<ul>
			<li key={payload.id}>
				<span>{payload.description}</span>
				<span>{payload.amount}</span>
			</li>
		</ul>
	);
};

export default TransactionListItem;
