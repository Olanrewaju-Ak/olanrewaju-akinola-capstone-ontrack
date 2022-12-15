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
		<section className="recent-transactions-list">
			<div className="recent-transactions__title-bar">
				<p className="recent-transactions__title">Recent Transactions</p>

				<button
					className="recent-transactions__title-button"
					onClick={() => {
						navigate("/account");
					}}
				>
					VIEW ALL TRANSACTIONS
				</button>
			</div>
			{transactions?.length
				? transactions
						.slice(0, 3)
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
