import "./AddForm.scss";
import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import errorIcon from "../../assets/icons/error-24px.svg";

const AddForm = ({ requestHandler, setAddFormVisible, buttonText, initialValues }) => {
	const [values, setValues] = useState(initialValues);

	// form validation states
	const [isError, setIsError] = useState(false);

	const { amount, description, type, date, category } = values;

	// track values for controlled form
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setValues({
			...values,
			[name]: value
		});
	};

	const formValidation = (values) => {
		// check if form field is empty

		if (!amount || !description || !type || !date || !category) {
			return false;
		} else {
			return true;
		}
	};

	const submitHandler = (event) => {
		event.preventDefault();

		if (!formValidation(values)) {
			setIsError(true);
		} else {
			setIsError(false);
			requestHandler(values);
			setAddFormVisible(false);
		}

		event.target.reset();
	};

	return (
		<div className="addform-container">
			<p className="addform__title">Add Transaction</p>
			<form action="" className="form" onSubmit={submitHandler}>
				<input
					type="date"
					name="date"
					value={values[date]}
					onChange={handleInputChange}
					className="form-control"
				/>
				{isError && !values[date] && (
					<div className="form__error-container">
						<img className="form__error-icon" src={errorIcon} alt="error icon" />
						<span className="form__error-message">The date field is required</span>
					</div>
				)}
				<input
					type="number"
					step="0.01"
					name="amount"
					placeholder="Enter transaction Amount.."
					value={values[amount]}
					className="form-control"
					onChange={handleInputChange}
				/>
				{isError && !values[amount] && (
					<div className="form__error-container">
						<img className="form__error-icon" src={errorIcon} alt="error icon" />
						<span className="form__error-message">The amount field is required</span>
					</div>
				)}
				<input
					type="text"
					name="description"
					placeholder="Description..."
					value={values[description]}
					className="form-control"
					onChange={handleInputChange}
				/>
				{isError && !values[description] && (
					<div className="form__error-container">
						<img className="form__error-icon" src={errorIcon} alt="error icon" />
						<span className="form__error-message">
							Please enter a valid description of your transaction
						</span>
					</div>
				)}

				<select
					name="category"
					id="category"
					list="category"
					placeholder="Select or Enter a category..."
					value={values[category]}
					className="form-control"
					onChange={handleInputChange}
				>
					<option value="">Please Select a Category</option>
					<option value="food">Food</option>
					<option value="personal">Personal</option>
					<option value="utility">Utility</option>
					<option value="transport">Transport</option>
					<option value="lifestyle">Lifestyle</option>
					<option value="medical">Medical</option>
					<option value="housing">Housing</option>
					<option value="income">Income</option>
					<option value="others">Others</option>
				</select>
				{isError && !values[category] && (
					<div className="form__error-container">
						<img className="form__error-icon" src={errorIcon} alt="error icon" />
						<span className="form__error-message">
							Please select an appropriate category for your transaction
						</span>
					</div>
				)}

				<select
					name="type"
					id="type"
					list="type"
					placeholder="Select a Transaction Type..."
					value={values[type]}
					className="form-control"
					onChange={handleInputChange}
				>
					<option value="" className="form-control__option">
						Please Select a Transaction Type
					</option>
					<option value="income">Income</option>
					<option value="expense">Expense</option>
				</select>
				{isError && !values[type] && (
					<div className="form__error-container">
						<img className="form__error-icon" src={errorIcon} alt="error icon" />
						<span className="form__error-message">
							Please select the correct transaction type
						</span>
					</div>
				)}

				{/* <div className="form-control__radio-buttons">
					<div className="form-control__radio-buttons--expense">
						<input
							type="radio"
							id="expense"
							name="type"
							value={type}
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
							value={type}
							checked={type === "income"}
							className="form-control__radio-buttons--input"
							onChange={handleInputChange}
						/>
						<label htmlFor="income">Income</label>
					</div>
				</div>
				{isError && !values[type] && (
					<div className="form__error-container">
						<img className="form__error-icon" src={errorIcon} alt="error icon" />
						<span className="form__error-message">
							Please select an appropriate transaction type
						</span>
					</div>
				)} */}
				<button type="submit" className="btn_primary">
					{buttonText}
				</button>
			</form>
		</div>
	);
};

export default AddForm;
