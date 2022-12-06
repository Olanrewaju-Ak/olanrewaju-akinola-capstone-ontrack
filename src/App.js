import "./App.scss";
import OverView from "./components/overview/OverView";
import Transactions from "./components/transactions/Transactions";
import IncomeExpenseCard from "./components/income-expenses-card/IncomeExpenseCard";
import AddTransactions from "./components/add-transactions/AddTransactions";
import Header from "./components/header/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

const URL = process.env.REACT_APP_BACKEND_URL;
const PORT = process.env.REACT_APP_PORT;

console.log(URL);
console.log(PORT);

function App() {
	const [transactions, updateTransactions] = useState([]);

	const addTransactions = (payload) => {
		const transactionsArray = [...transactions];
		transactionsArray.push(payload);
		updateTransactions(transactionsArray);
	};

	const getTransactions = async () => {
		const response = await axios.get("http://localhost:8080/api/transactions");
		console.log(response.data);
		updateTransactions(response.data);

		return;
	};

	useEffect(() => {
		getTransactions();
	}, []);

	return (
		<div className="App">
			<Header />
			<OverView />
			<IncomeExpenseCard />
			<AddTransactions addTransactions={addTransactions} />
			<Transactions transactions={transactions} />
		</div>
	);
}

export default App;
