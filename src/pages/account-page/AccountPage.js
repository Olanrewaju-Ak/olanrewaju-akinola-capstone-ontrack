import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

import BarChart from "../../components/bar-chart/BarChart";
import Transactions from "../../components/transactions/Transactions";

const URL = process.env.REACT_APP_BACKEND_URL;
const PORT = process.env.REACT_APP_PORT;

const AccountPage = () => {
	const [transactions, updateTransactions] = useState([]);

	const getTransactions = async () => {
		const response = await axios.get(`${URL}${PORT}/api/transactions`);
		updateTransactions(response.data);
		return;
	};

	useEffect(() => {
		try {
			getTransactions();
		} catch (error) {}
	}, []);

	/* *  Get total Food Expenses * */
	const getFoodCategory = transactions.filter((transactions) => {
		return transactions.category === "food";
	});

	const totalFood = getFoodCategory.reduce((total, item) => {
		const amount = item.amount;
		return total + amount;
	}, 0);

	/* *  Get total Housing Expenses * */
	const getHousingCategory = transactions.filter((transactions) => {
		return transactions.category === "housing";
	});

	const totalHousing = getHousingCategory.reduce((total, item) => {
		const amount = item.amount;
		return total + amount;
	}, 0);

	/* *  Get total Transportation Expenses * */
	const getTransportCategory = transactions.filter((transactions) => {
		return transactions.category === "transport";
	});

	const totalTransport = getTransportCategory.reduce((total, item) => {
		const amount = item.amount;
		return total + amount;
	}, 0);

	/* *  Get total Personal Expenses * */
	const getPersonalCategory = transactions.filter((transactions) => {
		return transactions.category === "personal";
	});

	const totalPersonal = getPersonalCategory.reduce((total, item) => {
		const amount = item.amount;
		return total + amount;
	}, 0);

	/* *  Get total Lifestyle Expenses * */
	const getLifestyleCategory = transactions.filter((transactions) => {
		return transactions.category === "lifestyle";
	});

	const totalLifestyle = getLifestyleCategory.reduce((total, item) => {
		const amount = item.amount;
		return total + amount;
	}, 0);

	/* *  Get total Utility Expenses * */
	const getUtilityCategory = transactions.filter((transactions) => {
		return transactions.category === "utility";
	});

	const totalUtility = getUtilityCategory.reduce((total, item) => {
		const amount = item.amount;
		return total + amount;
	}, 0);

	/* *  Get total Medical Expenses * */
	const getMedicalCategory = transactions.filter((transactions) => {
		return transactions.category === "medical";
	});

	const totalMedical = getMedicalCategory.reduce((total, item) => {
		const amount = item.amount;
		return total + amount;
	}, 0);

	/* *  Get total Others Expenses * */
	const getOthersCategory = transactions.filter((transactions) => {
		return transactions.category === "others";
	});

	const totalOthers = getOthersCategory.reduce((total, item) => {
		const amount = item.amount;
		return total + amount;
	}, 0);

	return (
		<div>
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
			<Transactions
				transactions={transactions}
				getTransactions={getTransactions}
				updateTransactions={updateTransactions}
			/>
		</div>
	);
};

export default AccountPage;
