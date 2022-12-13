import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

import BarChart from "../../components/bar-chart/BarChart";

const URL = process.env.REACT_APP_BACKEND_URL;
const PORT = process.env.REACT_APP_PORT;

const AccountPage = () => {
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

	console.log(totalFood);

	/* *  Get total Housing Expenses * */
	const getHousingCategory = transactionsByCategory.filter((transactions) => {
		return transactions.category === "housing";
	});

	const totalHousing = getHousingCategory.reduce((total, item) => {
		const amount = item.amount;
		return total + amount;
	}, 0);

	console.log(totalHousing);

	/* *  Get total Transportation Expenses * */
	const getTransportCategory = transactionsByCategory.filter((transactions) => {
		return transactions.category === "transport";
	});

	const totalTransport = getTransportCategory.reduce((total, item) => {
		const amount = item.amount;
		return total + amount;
	}, 0);

	console.log(totalTransport);

	/* *  Get total Personal Expenses * */
	const getPersonalCategory = transactionsByCategory.filter((transactions) => {
		return transactions.category === "personal";
	});

	const totalPersonal = getPersonalCategory.reduce((total, item) => {
		const amount = item.amount;
		return total + amount;
	}, 0);

	console.log(totalPersonal);

	/* *  Get total Lifestyle Expenses * */
	const getLifestyleCategory = transactionsByCategory.filter((transactions) => {
		return transactions.category === "lifestyle";
	});

	const totalLifestyle = getLifestyleCategory.reduce((total, item) => {
		const amount = item.amount;
		return total + amount;
	}, 0);

	console.log(totalLifestyle);

	/* *  Get total Utility Expenses * */
	const getUtilityCategory = transactionsByCategory.filter((transactions) => {
		return transactions.category === "utility";
	});

	const totalUtility = getUtilityCategory.reduce((total, item) => {
		const amount = item.amount;
		return total + amount;
	}, 0);

	console.log(totalUtility);

	/* *  Get total Medical Expenses * */
	const getMedicalCategory = transactionsByCategory.filter((transactions) => {
		return transactions.category === "medical";
	});

	const totalMedical = getMedicalCategory.reduce((total, item) => {
		const amount = item.amount;
		return total + amount;
	}, 0);

	console.log(totalMedical);

	/* *  Get total Others Expenses * */
	const getOthersCategory = transactionsByCategory.filter((transactions) => {
		return transactions.category === "others";
	});

	const totalOthers = getOthersCategory.reduce((total, item) => {
		const amount = item.amount;
		return total + amount;
	}, 0);

	console.log(totalOthers);

	return (
		<div>
			AccountOverviewPage
			<div>
				<BarChart
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
		</div>
	);
};

export default AccountPage;
