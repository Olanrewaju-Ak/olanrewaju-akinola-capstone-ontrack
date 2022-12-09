import "./DeleteModal.scss";
import closeIcon from "../../assets/icons/close-24px.svg";
import React from "react";

const DeleteModal = () => {
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
							{`Delete ${selectedWarehouse.warehouse_name} warehouse?`}
						</h1>
					</div>
					<div className="delete-modal__body">
						<p className="delete-modal__body-text">
							{`Please confirm that you’d like to delete the
							${selectedWarehouse.warehouse_name} warehouse from the list of
							warehouses. You won’t be able to undo this action.`}
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
								deleteWarehouse();
								navigate("/");
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
