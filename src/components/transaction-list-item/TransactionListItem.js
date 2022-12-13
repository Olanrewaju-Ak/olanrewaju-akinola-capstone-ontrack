import "./TransactionListItem.scss";
import React from "react";
import medicalIcon from "../../assets/icons/first-aid-kit.png";
import lifestyleIcon from "../../assets/icons/lifesyle.png";
import othersIcon from "../../assets/icons/others.png";
import housingIcon from "../../assets/icons/housing.png";
import foodIcon from "../../assets/icons/food2.png";
import transportIcon from "../../assets/icons/transport.png";
import personalIcon from "../../assets/icons/personal.png";
import subsIcon from "../../assets/icons/subs.png";
import incomeIcon from "../../assets/icons/income.png";

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
								src={
									transaction.category === "medical"
										? medicalIcon
										: transaction.category === "food"
										? foodIcon
										: transaction.category === "income"
										? incomeIcon
										: transaction.category === "utility"
										? subsIcon
										: transaction.category === "transport"
										? transportIcon
										: transaction.category === "lifestyle"
										? lifestyleIcon
										: transaction.category === "housing"
										? housingIcon
										: othersIcon
								}
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
