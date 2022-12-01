import "./AddForm.scss";
import React from "react";

const AddForm = () => {
	return (
		<div className="addform-container">
			<form action="" className="addform">
				<input type="number" placeholder="Amount" />
				<input type="text" placeholder="Description" />
				<select
					name="category"
					className="inventory-form__select"
					// value={values.category}
					// onChange={handleCategoryChange}
				>
					<option value="">Please select</option>
					<option value="Food">Electronics</option>
					<option value="Car">Gear</option>
					<option value="Tax">Apparel</option>
					<option value="Bills">Accessories</option>
					<option value="Health">Health</option>
				</select>
				<div className="addform__radio-buttons">
					<input type="radio" id="expense" name="type" value="EXPENSE" />
					<label htmlFor="expense">Expense</label>
					<input type="radio" id="Income" name="type" value="INCOME" />
					<label htmlFor="Income">Income</label>
				</div>
				<button>Add Transaction</button>
			</form>
		</div>
	);
};

export default AddForm;
