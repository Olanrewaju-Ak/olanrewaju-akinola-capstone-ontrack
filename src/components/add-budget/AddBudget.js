import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import "./AddBudget.scss";
import AddBudgetForm from "../add-budget-form/AddBudgetForm";

const URL = process.env.REACT_APP_BACKEND_URL;
const PORT = process.env.REACT_APP_PORT;

const AddBudget = ({ updateBudgets }) => {
	const [isAddBudgetFormVisible, setAddBudgetFormVisible] = useState(false);

	const addNewBudget = (values) => {
		const { max_amount, start_date, end_date, category, amount_spent } = values;
		axios
			.post(`${URL}${PORT}/api/budgets/`, {
				max_amount: max_amount,
				category: category,
				amount_spent: amount_spent,
				start_date: start_date,
				end_date: end_date
			})
			.then((response) => updateBudgets(response.data))
			.catch((error) => console.log(error));
	};

	const initialValues = {
		max_amount: "",
		category: "",
		amount_spent: "0",
		start_date: "",
		end_date: ""
	};

	console.log(initialValues);
	useEffect(() => {
		try {
			addNewBudget();
		} catch (error) {}
	}, []);

	const modal = (
		<AddBudgetForm
			setAddBudgetFormVisible={setAddBudgetFormVisible}
			requestHandler={addNewBudget}
			initialValues={initialValues}
			buttonText="+ Add Budget"
		/>
	);

	return (
		<section className="container">
			<div className="add-budget">
				<p className="add-budget__title">Add A New Budget</p>
				<button
					onClick={() => setAddBudgetFormVisible(!isAddBudgetFormVisible)}
					className="add-budget__btn--secondary"
				>
					{isAddBudgetFormVisible ? "CANCEL" : "ADD BUDGET"}
				</button>
			</div>
			{isAddBudgetFormVisible && modal}
		</section>
	);
};

export default AddBudget;
