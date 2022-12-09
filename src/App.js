import "./App.scss";
import OverView from "./components/overview/OverView";
import Transactions from "./components/transactions/Transactions";
import TransactionsPage from "./pages/TransactionsPage";
import IncomeExpenseCard from "./components/income-expenses-card/IncomeExpenseCard";
import AddTransactions from "./components/add-transaction/AddTransactions";
import Header from "./components/header/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

const URL = process.env.REACT_APP_BACKEND_URL;
const PORT = process.env.REACT_APP_PORT;

function App() {
	const [transactions, updateTransactions] = useState([]);
	const [selectedTransaction, setSelectedTransaction] = useState({
		description: " ",
		id: " "
	});

	// const addTransactions = (values) => {
	// 	const transactionsArray = [...transactions];
	// 	transactionsArray.push(values);
	// 	updateTransactions(transactionsArray);
	// };

	const getTransactions = async () => {
		const response = await axios.get("http://localhost:8080/api/transactions");

		const sortedTransactions = response.data.sort((a, b) => b.timestamp - a.timestamp);
		console.log(sortedTransactions);
		updateTransactions(sortedTransactions);
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
		<div className="App">
			<Header />
			<OverView transactions={transactions} />
			<IncomeExpenseCard />
			<TransactionsPage
				transactions={transactions}
				selectedTransaction={selectedTransaction}
				deleteTransaction={deleteTransaction}
				setSelectedTransaction={setSelectedTransaction}
			/>
		</div>
	);
}

export default App;
