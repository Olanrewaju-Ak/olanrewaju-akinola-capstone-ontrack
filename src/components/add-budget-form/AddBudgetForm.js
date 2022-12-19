import React from "react";
import { useState } from "react";

import "./AddBudgetForm.scss";
import errorIcon from "../../assets/icons/error-24px.svg";
import { useNavigate } from "react-router-dom";

const AddBudgetForm = ({ setAddBudgetFormVisible, requestHandler, initialValues, buttonText }) => {
	const navigate = useNavigate();

	const [values, setValues] = useState(initialValues);

	// form validation states
	const [isError, setIsError] = useState(false);

	const { max_amount, start_date, end_date, category, amount_spent } = values;

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

		if (!max_amount || !start_date || !end_date || !amount_spent || !category) {
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
			setAddBudgetFormVisible(false);
			navigate("/budgets");
		}

		event.target.reset();
	};

	return (
		<div className="budget-form__container">
			<p className="budget-form__title">Add A Budget</p>
			<form action="" className="budget-form" onSubmit={submitHandler}>
				<div className="budget-form__group">
					<label htmlFor="" className="budget-form__label">
						Start Date
						<input
							type="date"
							name="start_date"
							value={values[start_date]}
							onChange={handleInputChange}
							className={
								isError && !values[start_date]
									? "budget-form__input--error"
									: "budget-form__input"
							}
						/>
					</label>
				</div>
				{isError && !values[start_date] && (
					<div className="budget-form__error-container">
						<img className="budget-form__error-icon" src={errorIcon} alt="error icon" />
						<span className="budget-form__error-message">
							The date field is required
						</span>
					</div>
				)}
				<div className="budget-form__group">
					<label htmlFor="" className="budget-form__label">
						End Date
						<input
							type="date"
							name="end_date"
							value={values[end_date]}
							onChange={handleInputChange}
							className={
								isError && !values[end_date]
									? "budget-form__input--error"
									: "budget-form__input"
							}
						/>
					</label>
				</div>
				{isError && !values[end_date] && (
					<div className="budget-form__error-container">
						<img className="budget-form__error-icon" src={errorIcon} alt="error icon" />
						<span className="budget-form__error-message">
							The date field is required
						</span>
					</div>
				)}

				<div className="budget-form__group">
					<label htmlFor="" className="budget-form__label">
						Budget Limit
						<input
							type="number"
							step="0.01"
							name="max_amount"
							placeholder="Enter transaction Amount.."
							value={values[max_amount]}
							className={
								isError && !values[max_amount]
									? "budget-form__input--error"
									: "budget-form__input"
							}
							onChange={handleInputChange}
						/>
					</label>
				</div>
				{isError && !values[max_amount] && (
					<div className="budget-form__error-container">
						<img className="budget-form__error-icon" src={errorIcon} alt="error icon" />
						<span className="budget-form__error-message">
							The budget limit is required
						</span>
					</div>
				)}
				<div className="budget-form__group">
					<label htmlFor="" className="budget-form__label">
						Current Expense
						<input
							type="number"
							step="0.01"
							name="amount"
							placeholder="Enter the amount spent so far.."
							value="0"
							className="budget-form__input"
							onChange={handleInputChange}
						/>
					</label>
				</div>

				<label className="budget-form__label">
					Budget Category
					<div className="budget-form__select-container">
						<select
							name="category"
							id="category"
							list="category"
							placeholder="Select or Enter a category..."
							value={values[category]}
							className="budget-form__select"
							onChange={handleInputChange}
						>
							<option value="" className="budget-form__select-option">
								Please Select a Category
							</option>
							<option value="food" className="budget-form__select-option">
								Food
							</option>
							<option value="personal" className="budget-form__select-option">
								Personal
							</option>
							<option value="utility" className="budget-form__select-option">
								Utility
							</option>
							<option value="transport" className="budget-form__select-option">
								Transport
							</option>
							<option value="lifestyle" className="budget-form__select-option">
								Lifestyle
							</option>
							<option value="medical" className="budget-form__select-option">
								Medical
							</option>
							<option value="housing" className="budget-form__select-option">
								Housing
							</option>
							<option value="income" className="budget-form__select-option">
								Income
							</option>
							<option value="others" className="budget-form__select-option">
								Others
							</option>
						</select>
					</div>
				</label>

				{isError && !values[category] && (
					<div className="budget-form__error-container">
						<img className="budget-form__error-icon" src={errorIcon} alt="error icon" />
						<span className="budget-form__error-message">
							Please select an appropriate category for your budget
						</span>
					</div>
				)}

				<button type="submit" className="budget-form__btn--primary">
					{buttonText}
				</button>
			</form>
		</div>
	);
};

export default AddBudgetForm;
