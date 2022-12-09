import "./AddForm.scss";
import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddForm = ({ requestHandler, setAddFormVisible, buttonText, initialValues }) => {
	const [values, setValues] = useState(initialValues);

	const { amount, description, type, date, category } = values;

	// track values for controlled form
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setValues({
			...values,
			[name]: value
		});
	};

	const submitHandler = (event) => {
		event.preventDefault();

		// console.log(values);
		requestHandler(values);
		setAddFormVisible(false);
		event.target.reset();
	};

	return (
		<div className="addform-container">
			<form action="" className="form" onSubmit={submitHandler}>
				<input
					type="date"
					name="date"
					value={values[date]}
					onChange={handleInputChange}
					className="form-control"
				/>
				<input
					type="number"
					step="0.01"
					name="amount"
					placeholder="Enter transaction Amount.."
					value={values[amount]}
					className="form-control"
					onChange={handleInputChange}
				/>
				<input
					type="text"
					name="description"
					placeholder="Description..."
					value={values[description]}
					className="form-control"
					onChange={handleInputChange}
				/>
				<input
					name="category"
					// className="inventory-form__select"
					list="category"
					placeholder="Select or Enter a category..."
					value={values[category]}
					className="form-control"
					onChange={handleInputChange}
				/>
				<datalist id="category" className="form-control">
					<option value="">Please select a Category</option>
					<option value="Food">Food</option>
					<option value="Car">Car</option>
					<option value="Tax">Tax</option>
					<option value="Bills">Bills</option>
					<option value="Health">Health</option>
				</datalist>

				<div className="form-control__radio-buttons">
					<div className="form-control__radio-buttons--expense">
						<input
							type="radio"
							id="expense"
							name="type"
							value="expense"
							checked={type === "expense"}
							className="form-control__radio-buttons--input"
							onChange={handleInputChange}
						/>
						<label htmlFor="expense">Expense</label>
					</div>
					<div className="form-control__radio-buttons--income">
						<input
							type="radio"
							id="income"
							name="type"
							value="income"
							checked={type === "income"}
							className="form-control__radio-buttons--input"
							onChange={handleInputChange}
						/>
						<label htmlFor="income">Income</label>
					</div>
				</div>
				<button type="submit" className="btn_primary">
					{buttonText}
				</button>
			</form>
		</div>
	);
};

export default AddForm;
