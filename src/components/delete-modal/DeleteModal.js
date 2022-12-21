import "./DeleteModal.scss";
import closeIcon from "../../assets/icons/close-24px.svg";
import React from "react";
import { useNavigate } from "react-router-dom";

const DeleteModal = ({ closeModal, deleteTransaction, selectedTransaction }) => {
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
							{`Delete ${selectedTransaction.description} transaction?`}
						</h1>
					</div>
					<div className="delete-modal__body">
						<p className="delete-modal__body-text">
							{`Please confirm that you’d like to delete the
							${selectedTransaction.description} transaction from the list of
							transactions. You won’t be able to undo this action.`}
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
								deleteTransaction();
								navigate("/account");
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

export default DeleteModal;
