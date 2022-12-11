import "./TransactionListItem.scss";
import React from "react";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";

const TransactionListItem = ({
	transaction,
	selectedTransaction,
	deleteTransaction,
	setSelectedTransaction
}) => {
	const toTitleCase = (str) => {
		return str.replace(/\w\S*/g, function (txt) {
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		});
	};

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
							{toTitleCase(transaction.description)}
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
							{transaction.type === "income" ? "+" : "-"}$
							{transaction.amount.toFixed(2)}
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
