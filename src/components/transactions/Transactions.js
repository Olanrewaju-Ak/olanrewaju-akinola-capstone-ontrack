import React from "react";
import "./Transactions.scss";
import TransactionListItem from "../transaction-list-item/TransactionListItem";

const Transactions = ({
	transactions,
	selectedTransaction,
	deleteTransaction,
	setSelectedTransaction
}) => {
	return (
		<section className="transactions-list">
			<p className="transactions-title">Recent Transactions</p>

			{transactions?.length
				? transactions.map((transaction) => (
						<TransactionListItem
							transaction={transaction}
							key={transaction.id}
							selectedTransaction={selectedTransaction}
							deleteTransaction={deleteTransaction}
							setSelectedTransaction={setSelectedTransaction}
						/>
				  ))
				: ""}
		</section>
	);
};

export default Transactions;
