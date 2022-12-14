import "./App.scss";

import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Header from "./components/header/Header";
import HomePage from "./pages/home-page/HomePage";
import AccountPage from "./pages/account-page/AccountPage";
import BudgetPage from "./pages/budget-page/BudgetPage";
import Footer from "./components/footer/Footer";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />

					<Route path="/account" element={<AccountPage />} />

					<Route path="/budgets" element={<BudgetPage />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
