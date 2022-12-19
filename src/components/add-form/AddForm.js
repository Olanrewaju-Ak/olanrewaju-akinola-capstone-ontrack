import "./AddForm.scss";
import React from "react";
import { useState } from "react";
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
				<div className="form__group">
					<label htmlFor="" className="form__label">
						Transaction Date
						<input
							type="date"
							name="date"
							value={values[date]}
							onChange={handleInputChange}
							className={
								isError && !values[date] ? "form__input--error" : "form__input"
							}
						/>
					</label>
				</div>
				{isError && !values[date] && (
					<div className="form__error-container">
						<img className="form__error-icon" src={errorIcon} alt="error icon" />
						<span className="form__error-message">The date field is required</span>
					</div>
				)}
				<div className="form__group">
					<label htmlFor="" className="form__label">
						Transaction Amount
						<input
							type="number"
							step="0.01"
							name="amount"
							placeholder="Enter transaction Amount.."
							value={values[amount]}
							className={
								isError && !values[amount] ? "form__input--error" : "form__input"
							}
							onChange={handleInputChange}
						/>
					</label>
				</div>
				{isError && !values[amount] && (
					<div className="form__error-container">
						<img className="form__error-icon" src={errorIcon} alt="error icon" />
						<span className="form__error-message">The amount field is required</span>
					</div>
				)}
				<div className="form__group">
					<label htmlFor="" className="form__label">
						Transaction Description
						<input
							type="text"
							name="description"
							placeholder="Description..."
							value={values[description]}
							className={
								isError && !values[description]
									? "form__input--error"
									: "form__input"
							}
							onChange={handleInputChange}
						/>
					</label>
				</div>
				{isError && !values[description] && (
					<div className="form__error-container">
						<img className="form__error-icon" src={errorIcon} alt="error icon" />
						<span className="form__error-message">
							Please enter a valid description of your transaction
						</span>
					</div>
				)}
				<label className="form__label">
					Transaction Category
					<div className="form__select-container">
						<select
							name="category"
							id="category"
							list="category"
							placeholder="Select or Enter a category..."
							value={values[category]}
							className="form__select"
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
					</div>
				</label>

				{isError && !values[category] && (
					<div className="form__error-container">
						<img className="form__error-icon" src={errorIcon} alt="error icon" />
						<span className="form__error-message">
							Please select an appropriate category for your transaction
						</span>
					</div>
				)}

				<label className="form__label">
					Transaction Type
					<div className="form__select-container">
						<select
							name="type"
							id="type"
							list="type"
							placeholder="Select a Transaction Type..."
							value={values[type]}
							className="form__select"
							onChange={handleInputChange}
						>
							<option value="">Please Select a Transaction Type</option>
							<option value="income">Income</option>
							<option value="expense">Expense</option>
						</select>
					</div>
				</label>

				{isError && !values[type] && (
					<div className="form__error-container">
						<img className="form__error-icon" src={errorIcon} alt="error icon" />
						<span className="form__error-message">
							Please select the correct transaction type
						</span>
					</div>
				)}

				<button type="submit" className="btn__primary">
					{buttonText}
				</button>
			</form>
		</div>
	);
};

export default AddForm;
