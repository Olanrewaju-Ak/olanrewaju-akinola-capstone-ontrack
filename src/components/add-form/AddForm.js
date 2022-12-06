import "./AddForm.scss";
import React from "react";
import { useState } from "react";

const AddForm = (props) => {
	const [amount, setAmount] = useState("");
	const [desc, setDesc] = useState("");
	const [type, setType] = useState("EXPENSE");

	const addTransaction = (event) => {
		event.preventDefault();
		props.addTransactions({ amount: Number(amount), desc, type, id: Date.now() });
		console.log(amount, desc);
		props.setAddFormVisible();
	};

	return (
		<div className="addform-container">
			<form action="" className="addform">
				<input
					type="number"
					placeholder="Amount"
					value={amount}
					onChange={(e) => setAmount(e.target.value)}
				/>
				<input
					type="text"
					placeholder="Description"
					value={desc}
					onChange={(e) => setDesc(e.target.value)}
				/>
				<select
					name="category"
					className="inventory-form__select"
					// value={values.category}
					// onChange={handleCategoryChange}
				>
					<option value="">Please select a Category</option>
					<option value="Food">Food</option>
					<option value="Car">Car</option>
					<option value="Tax">Tax</option>
					<option value="Bills">Bills</option>
					<option value="Health">Health</option>
				</select>
				<div className="addform__radio-buttons">
					<input
						type="radio"
						id="expense"
						name="type"
						value="EXPENSE"
						checked={type === "EXPENSE"}
						onChange={(e) => setType(e.target.value)}
					/>
					<label htmlFor="expense">Expense</label>
					<input
						type="radio"
						id="Income"
						name="type"
						value="INCOME"
						checked={type === "INCOME"}
						onChange={(e) => setType(e.target.value)}
					/>
					<label htmlFor="Income">Income</label>
				</div>
				<button onClick={(event) => addTransaction(event)}>Add Transaction</button>
			</form>
		</div>
	);
};

export default AddForm;
