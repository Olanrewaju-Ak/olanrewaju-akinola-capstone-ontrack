import React from "react";
import "./recentTransactions.scss";
import TransactionListItem from "../transaction-list-item/TransactionListItem";
import { useNavigate } from "react-router-dom";

const RecentTransactions = ({
	transactions,
	selectedTransaction,
	deleteTransaction,
	setSelectedTransaction
}) => {
	const navigate = useNavigate();
	return (
		<section className="transactions-list">
			<div className="transactions__title-bar">
				<p className="transactions__title">Recent Transactions</p>

				<button
					className="transactions__title-button"
					onClick={() => {
						navigate("/account");
					}}
				>
					View All Transactions
				</button>
			</div>
			{transactions?.length
				? transactions
						.slice(0, 5)
						.map((transaction) => (
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

export default RecentTransactions;
