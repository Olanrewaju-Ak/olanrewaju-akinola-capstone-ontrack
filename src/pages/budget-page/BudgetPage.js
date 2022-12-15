import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import "./BudgetPage.scss";
import BudgetsList from "../../components/budgets-list/BudgetsList";
import AddBudget from "../../components/add-budget/AddBudget";

const URL = process.env.REACT_APP_BACKEND_URL;
const PORT = process.env.REACT_APP_PORT;

const BudgetPage = () => {
	const [budgets, updateBudgets] = useState([]);
	useEffect(() => {
		try {
			const getBudgets = async () => {
				const response = await axios.get(`${URL}${PORT}/api/budgets`);
				updateBudgets(response.data);
				return;
			};
			getBudgets();
		} catch (error) {}
	}, []);

	// console.log(budgets);

	const [transactionsByCategory, updateTransactionsByCategory] = useState([]);
	useEffect(() => {
		try {
			const getTransactionsByCategory = async () => {
				const response = await axios.get(`${URL}${PORT}/api/transactions`);
				updateTransactionsByCategory(response.data);
				return;
			};
			getTransactionsByCategory();
		} catch (error) {}
	}, []);

	// console.log(transactionsByCategory);

	/* *  Get total Food Expenses * */
	const getFoodCategory = transactionsByCategory.filter((transactions) => {
		return transactions.category === "food";
	});

	const totalFood = getFoodCategory.reduce((total, item) => {
		const amount = item.amount;
		return total + amount;
	}, 0);

	/* *  Get total Housing Expenses * */
	const getHousingCategory = transactionsByCategory.filter((transactions) => {
		return transactions.category === "housing";
	});

	const totalHousing = getHousingCategory.reduce((total, item) => {
		const amount = item.amount;
		return total + amount;
	}, 0);

	/* *  Get total Transportation Expenses * */
	const getTransportCategory = transactionsByCategory.filter((transactions) => {
		return transactions.category === "transport";
	});

	const totalTransport = getTransportCategory.reduce((total, item) => {
		const amount = item.amount;
		return total + amount;
	}, 0);

	/* *  Get total Personal Expenses * */
	const getPersonalCategory = transactionsByCategory.filter((transactions) => {
		return transactions.category === "personal";
	});

	const totalPersonal = getPersonalCategory.reduce((total, item) => {
		const amount = item.amount;
		return total + amount;
	}, 0);

	/* *  Get total Lifestyle Expenses * */
	const getLifestyleCategory = transactionsByCategory.filter((transactions) => {
		return transactions.category === "lifestyle";
	});

	const totalLifestyle = getLifestyleCategory.reduce((total, item) => {
		const amount = item.amount;
		return total + amount;
	}, 0);

	/* *  Get total Utility Expenses * */
	const getUtilityCategory = transactionsByCategory.filter((transactions) => {
		return transactions.category === "utility";
	});

	const totalUtility = getUtilityCategory.reduce((total, item) => {
		const amount = item.amount;
		return total + amount;
	}, 0);

	/* *  Get total Medical Expenses * */
	const getMedicalCategory = transactionsByCategory.filter((transactions) => {
		return transactions.category === "medical";
	});

	const totalMedical = getMedicalCategory.reduce((total, item) => {
		const amount = item.amount;
		return total + amount;
	}, 0);

	/* *  Get total Others Expenses * */
	const getOthersCategory = transactionsByCategory.filter((transactions) => {
		return transactions.category === "others";
	});

	// console.log(getOthersCategory);
	const totalOthers = getOthersCategory.reduce((total, item) => {
		const amount = item.amount;
		return total + amount;
	}, 0);

	return (
		<section className="budget-page">
			<div>
				<AddBudget updateBudgets={updateBudgets} />
				<BudgetsList
					budgets={budgets}
					totalHousing={totalHousing}
					totalFood={totalFood}
					totalTransport={totalTransport}
					totalPersonal={totalPersonal}
					totalLifestyle={totalLifestyle}
					totalUtility={totalUtility}
					totalMedical={totalMedical}
					totalOthers={totalOthers}
				/>
			</div>
		</section>
	);
};

export default BudgetPage;
