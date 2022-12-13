import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import OverView from "../../components/overview/OverView";
import IncomeExpenseCard from "../../components/income-expenses-card/IncomeExpenseCard";
import TransactionsPage from "../transactions-page/TransactionsPage";

const URL = process.env.REACT_APP_BACKEND_URL;
const PORT = process.env.REACT_APP_PORT;

const HomePage = () => {
	const [transactions, updateTransactions] = useState([]);
	const [selectedTransaction, setSelectedTransaction] = useState({
		description: " ",
		id: " "
	});

	const getTransactions = async () => {
		const response = await axios.get("http://localhost:8080/api/transactions");
		console.log(response.data);

		updateTransactions(response.data);
		return;
	};

	useEffect(() => {
		try {
			getTransactions();
		} catch (error) {}
	}, []);

	const deleteTransaction = async () => {
		await axios.delete(`${URL}${PORT}/api/transactions/${selectedTransaction.id}`);
		// setOpenModal(false);

		getTransactions();
	};
	return (
		<div>
			<OverView transactions={transactions} />
			<IncomeExpenseCard />
			<TransactionsPage
				transactions={transactions}
				selectedTransaction={selectedTransaction}
				deleteTransaction={deleteTransaction}
				setSelectedTransaction={setSelectedTransaction}
				getTransactions={getTransactions}
			/>
		</div>
	);
};

export default HomePage;
