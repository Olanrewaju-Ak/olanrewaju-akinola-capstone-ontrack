import "./TransactionListItem.scss";
import React from "react";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";

const TransactionListItem = ({
	transaction,
	selectedTransaction,
	deleteTransaction,
	setSelectedTransaction
}) => {
	return (
		<>
			<section key={transaction.id} className={"transaction-list__item"}>
				<div
					className={
						transaction.type === "income"
							? "transaction-card income"
							: "transaction-card expense"
					}
				>
					<div className="transaction-card__description">
						<p className="transaction-card__description-text">
							{transaction.description}
						</p>
						<button
							onClick={() => {
								setSelectedTransaction({
									description: transaction.description,
									id: transaction.id
								});
								// console.log(transaction.id);
								deleteTransaction();
							}}
							className="transaction-card__delete-btn"
						>
							<img
								src={deleteIcon}
								alt="delete-icon"
								className="transaction-card__icon"
							/>
						</button>
					</div>
					<div className="transaction-card__details">
						<p className="transaction-card__details--amount">
							{transaction.type === "income" ? "+" : "-"}${transaction.amount}
						</p>
						<p className="transaction-card__details--date">
							{new Date(transaction.date).toLocaleDateString("en-US", {
								year: "numeric",
								month: "2-digit",
								day: "2-digit"
							})}
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default TransactionListItem;
