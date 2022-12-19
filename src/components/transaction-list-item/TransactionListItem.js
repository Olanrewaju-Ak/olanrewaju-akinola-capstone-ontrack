import "./TransactionListItem.scss";

import React from "react";
import { useNavigate } from "react-router-dom";

import medicalIcon from "../../assets/icons/first-aid-kit.png";
import lifestyleIcon from "../../assets/icons/lifesyle.png";
import othersIcon from "../../assets/icons/others.png";
import housingIcon from "../../assets/icons/housing.png";
import foodIcon from "../../assets/icons/food2.png";
import transportIcon from "../../assets/icons/transport.png";
import personalIcon from "../../assets/icons/personal.png";
import subsIcon from "../../assets/icons/subs.png";
import incomeIcon from "../../assets/icons/income.png";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";

const TransactionListItem = ({ transaction, setOpenModal, updateSelectedTransaction }) => {
	const navigate = useNavigate();

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
					<div className="transaction-card__left-side">
						<div className="transaction-card__image">
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
										: transaction.category === "personal"
										? personalIcon
										: othersIcon
								}
								alt="category-icon"
								className="transaction-card__icon"
							/>
						</div>
						<div className="transaction-card__description">
							<p className="transaction-card__description-text">
								{toTitleCase(transaction.description)}
							</p>

							<p className="transaction-card__description-text--category">
								{toTitleCase(transaction.category)}
							</p>
						</div>
					</div>
					<div className="transaction-card__right-side">
						<div className="transaction-card__details">
							<p className="transaction-card__details--amount">
								{transaction.type === "income" ? "+" : "-"}$
								{transaction.amount.toFixed(2)}
							</p>
							<p className="transaction-card__details--date">
								{new Date(transaction.date).toDateString()}
							</p>
						</div>
						<button
							onClick={() => {
								updateSelectedTransaction({
									description: transaction.description,
									id: transaction.id
								});
								setOpenModal(true);
								navigate("/account");
							}}
							className="transaction-card__delete-btn"
						>
							<img
								src={deleteIcon}
								alt="delete-icon"
								className="transaction-card__icon-delete"
							/>
						</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default TransactionListItem;
