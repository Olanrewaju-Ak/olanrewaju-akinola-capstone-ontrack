import React from "react";
import { useNavigate } from "react-router-dom";

import "./BudgetCard.scss";
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

const BudgetCard = ({
	budget,
	setSelectedBudget,
	setOpenModal,
	totalFood,
	totalHousing,
	totalTransport,
	totalPersonal,
	totalLifestyle,
	totalUtility,
	totalMedical,
	totalOthers
}) => {
	const toTitleCase = (str) => {
		return str.replace(/\w\S*/g, function (txt) {
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		});
	};

	const navigate = useNavigate();
	return (
		<>
			<section key={budget.id} className={"budget-list__item"}>
				<div className="budget-card ">
					<div className="budget-card__left-side">
						<div className="budget-card__description">
							<img
								src={
									budget.category === "medical"
										? medicalIcon
										: budget.category === "food"
										? foodIcon
										: budget.category === "income"
										? incomeIcon
										: budget.category === "utility"
										? subsIcon
										: budget.category === "transport"
										? transportIcon
										: budget.category === "lifestyle"
										? lifestyleIcon
										: budget.category === "housing"
										? housingIcon
										: budget.category === "personal"
										? personalIcon
										: othersIcon
								}
								alt="category-icon"
								className="budget-card__icon"
							/>
							<p className="budget-card__description-text">
								{toTitleCase(budget.category)}
							</p>
						</div>
					</div>
					<div className="budget-card__right-side">
						<div className="budget-card__details">
							<p
								className={
									budget.category === "medical" &&
									totalMedical >= budget.max_amount
										? "budget-card__details-amount--high"
										: "budget-card__details-amount" &&
										  (budget.category === "lifestyle" &&
										  totalLifestyle >= budget.max_amount
												? "budget-card__details-amount--high"
												: "budget-card__details-amount") &&
										  (budget.category === "utility" &&
										  totalUtility > budget.max_amount
												? "budget-card__details-amount--high"
												: "budget-card__details-amount")
								}
							>
								$
								{budget.category === "medical"
									? totalMedical
									: budget.category === "food"
									? totalFood
									: budget.category === "utility"
									? totalUtility
									: budget.category === "transport"
									? totalTransport
									: budget.category === "lifestyle"
									? totalLifestyle
									: budget.category === "housing"
									? totalHousing
									: budget.category === "personal"
									? totalPersonal
									: totalOthers}
								/
								<span className="budget-card__details-amount--max">
									${budget.max_amount.toFixed(2)}
								</span>
							</p>
							<div className="budget-card__date-holder">
								<p className="budget-card__details-date">
									<span>From: </span>
									{new Date(budget.start_date).toLocaleDateString("en-US", {
										year: "numeric",
										month: "2-digit",
										day: "2-digit"
									})}
								</p>
								<p className="budget-card__details-date">
									<span>To: </span>
									{new Date(budget.end_date).toLocaleDateString("en-US", {
										year: "numeric",
										month: "2-digit",
										day: "2-digit"
									})}
								</p>
							</div>
						</div>
						<button
							onClick={() => {
								setSelectedBudget({
									description: budget.category,
									id: budget.id
								});
								setOpenModal(true);
								navigate("/budgets");
							}}
							className="budget-card__delete-btn"
						>
							<img
								src={deleteIcon}
								alt="delete-icon"
								className="budget-card__icon-delete"
							/>
						</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default BudgetCard;
