import React from "react";
import TransactionListItem from "../transaction-list-item/TransactionListItem";

const Transactions = (props) => {
	return (
		<div>
			<p className="transactions-title">Recent Transactions</p>

			{props.transactions?.length
				? props.transactions.map((payload) => (
						<TransactionListItem payload={payload} key={payload.id} />
				  ))
				: ""}
		</div>
	);
};

export default Transactions;
