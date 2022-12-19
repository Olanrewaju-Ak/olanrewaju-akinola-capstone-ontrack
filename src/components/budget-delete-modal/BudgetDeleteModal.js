import "./BudgetDeleteModal.scss";
import closeIcon from "../../assets/icons/close-24px.svg";
import React from "react";
import { useNavigate } from "react-router-dom";

const BudgetDeleteModal = ({ closeModal, deleteBudget, selectedBudget }) => {
	const navigate = useNavigate();
	return (
		<>
			<section className="delete-modal__container">
				<div className="delete-modal__content">
					<div className="delete-modal__button-top">
						<button
							className="delete-modal__button--close"
							onClick={() => closeModal(false)}
						>
							<img src={closeIcon} alt="close-icon" />
						</button>
					</div>
					<div className="delete-modal__title">
						<h1 className="delete-modal__title-text">
							{`Delete ${selectedBudget.description} budget?`}
						</h1>
					</div>
					<div className="delete-modal__body">
						<p className="delete-modal__body-text">
							{`Please confirm that you’d like to delete the
							${selectedBudget.description} budget from the list of
							budgets. You won’t be able to undo this action.`}
						</p>
					</div>

					<div className="delete-modal__button">
						<button
							className="delete-modal__button--cancel"
							onClick={() => closeModal(false)}
						>
							Cancel
						</button>
						<button
							className="delete-modal__button--delete"
							onClick={() => {
								deleteBudget();
								navigate("/budgets");
							}}
						>
							Delete
						</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default BudgetDeleteModal;
