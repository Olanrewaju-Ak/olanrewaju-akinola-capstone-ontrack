import "./App.scss";

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "./pages/landing-page/LandingPage";
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
					<Route path="/" element={<LandingPage />} />
					<Route path="/home" element={<HomePage />} />

					<Route path="/account" element={<AccountPage />} />

					<Route path="/budgets" element={<BudgetPage />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
