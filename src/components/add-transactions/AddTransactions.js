import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import "./AddTransactions.scss";
import AddForm from "../add-form/AddForm";

const URL = process.env.REACT_APP_BACKEND_URL;
const PORT = process.env.REACT_APP_PORT;

const Addtransactions = ({ updateTransactions }) => {
	const [isAddformVisible, setAddFormVisible] = useState(false);

	const addNewTransaction = (values) => {
		const { amount, description, type, date, category } = values;
		axios
			.post(`${URL}${PORT}/api/transactions/`, {
				amount: amount,
				description: description,
				type: type,
				category: category,
				date: date
			})
			.then((response) => updateTransactions(response.data))
			.catch((error) => console.log(error));
	};
	const initialValues = {
		amount: "",
		description: " ",
		type: " ",
		category: " ",
		date: ""
	};

	useEffect(() => {
		try {
			addNewTransaction();
		} catch (error) {}
	}, []);

	const modal = (
		<AddForm
			setAddFormVisible={setAddFormVisible}
			requestHandler={addNewTransaction}
			initialValues={initialValues}
			buttonText="+ Add Transaction"
		/>
	);

	return (
		<section className="container">
			<div className="add-transaction">
				<p className="add-transaction__title">Add a New Transaction</p>

				<button
					onClick={() => setAddFormVisible(!isAddformVisible)}
					className="add-transaction__btn--secondary"
				>
					{isAddformVisible ? "CANCEL" : "ADD TRANSACTION"}
				</button>
			</div>
			{isAddformVisible && modal}
		</section>
	);
};

export default Addtransactions;
