import React from "react";
import "./Transactions.scss";
import TransactionListItem from "../transaction-list-item/TransactionListItem";

const Transactions = (props) => {
	return (
		<div>
			<p className="transactions-title">Recent Transactions</p>

			{props.transactions?.length
				? props.transactions.map((transaction) => (
						<TransactionListItem transaction={transaction} key={transaction.id} />
				  ))
				: ""}
		</div>
	);
};

export default Transactions;
