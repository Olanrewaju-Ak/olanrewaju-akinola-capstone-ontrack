import React from "react";
import { useState, useEffect } from "react";
import AddForm from "../add-form/AddForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AddTransactions.scss";

const URL = process.env.REACT_APP_BACKEND_URL;
const PORT = process.env.REACT_APP_PORT;

// console.log(URL);

const Addtransaction = () => {
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
			.then((response) => console.log(response.data))
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
			// getTransactions();
		} catch (error) {}
	}, []);

	const modal = (
		// <Modal isOpen={isAddformVisible} ariaHideApp={false}>
		<AddForm
			setAddFormVisible={setAddFormVisible}
			requestHandler={addNewTransaction}
			initialValues={initialValues}
			buttonText="+ Add Transaction"
		/>
		// {/* </Modal> */}
	);

	return (
		<section className="container">
			<div className="add-transaction">
				{/* <p className="add-transaction__title">Addtransaction</p> */}

				<button
					onClick={() => setAddFormVisible(!isAddformVisible)}
					className="btn_secondary"
				>
					{isAddformVisible ? "Cancel" : "ADD TRANSACTION"}
				</button>
			</div>
			{isAddformVisible && modal}
		</section>
	);
};

export default Addtransaction;
