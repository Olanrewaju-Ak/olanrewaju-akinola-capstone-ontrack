import "./BudgetsList.scss";
import BudgetCard from "../budget-card/BudgetCard";

import React from "react";
import { useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import BudgetDeleteModal from "../budget-delete-modal/BudgetDeleteModal";

const URL = process.env.REACT_APP_BACKEND_URL;
const PORT = process.env.REACT_APP_PORT;

const BudgetsList = ({
	budgets,
	updateBudgets,
	totalHousing,
	totalFood,
	totalTransport,
	totalPersonal,
	totalLifestyle,
	totalUtility,
	totalMedical,
	totalOthers
}) => {
	const [selectedBudget, setSelectedBudget] = useState({
		category: " ",
		id: " "
	});
	const [openModal, setOpenModal] = useState(false);

	const deleteBudget = async () => {
		await axios
			.delete(`${URL}${PORT}/api/budgets/${selectedBudget.id}`)
			.then((response) => updateBudgets(response.data))
			.catch((error) => console.log(error));
		setOpenModal(false);
	};

	const modal = (
		<Modal isOpen={openModal} ariaHideApp={false} className="delete-modal">
			<BudgetDeleteModal
				closeModal={setOpenModal}
				deleteBudget={deleteBudget}
				selectedBudget={selectedBudget}
			/>
		</Modal>
	);

	return (
		<section className="budgets-list">
			<p className="budgets-list__title"> Your Budgets</p>

			{budgets?.length
				? budgets.map((budget) => (
						<BudgetCard
							budgets={budgets}
							budget={budget}
							key={budget.id}
							totalHousing={totalHousing}
							totalFood={totalFood}
							totalTransport={totalTransport}
							totalPersonal={totalPersonal}
							totalLifestyle={totalLifestyle}
							totalUtility={totalUtility}
							totalMedical={totalMedical}
							totalOthers={totalOthers}
							setSelectedBudget={setSelectedBudget}
							setOpenModal={setOpenModal}
						/>
				  ))
				: ""}
			{modal}
		</section>
	);
};

export default BudgetsList;
