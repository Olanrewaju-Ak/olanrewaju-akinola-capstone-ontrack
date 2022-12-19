import React from "react";
import { useState } from "react";
import axios from "axios";
import Modal from "react-modal";

import Addtransactions from "../../components/add-transactions/AddTransactions";
import DeleteModal from "../../components/delete-modal/DeleteModal";
import RecentTransactions from "../../components/recentTransactions/recentTransactions";

const URL = process.env.REACT_APP_BACKEND_URL;
const PORT = process.env.REACT_APP_PORT;

const TransactionsPage = ({ transactions, getTransactions, updateTransactions }) => {
	const [selectedTransaction, updateSelectedTransaction] = useState({
		description: " ",
		id: " "
	});

	const [openModal, setOpenModal] = useState(false);

	const deleteTransaction = async () => {
		await axios.delete(`${URL}${PORT}/api/transactions/${selectedTransaction.id}`);
		setOpenModal(false);
		getTransactions();
	};

	const modal = (
		<Modal isOpen={openModal} ariaHideApp={false} className="delete-modal">
			<DeleteModal
				closeModal={setOpenModal}
				deleteTransaction={deleteTransaction}
				selectedTransaction={selectedTransaction}
			/>
		</Modal>
	);

	return (
		<div className="transactions-page">
			<Addtransactions
				transactions={transactions}
				getTransactions={getTransactions}
				updateTransactions={updateTransactions}
			/>
			<RecentTransactions
				transactions={transactions}
				getTransactions={getTransactions}
				updateSelectedTransaction={updateSelectedTransaction}
				deleteTransaction={deleteTransaction}
				setOpenModal={setOpenModal}
			/>
			{modal}
		</div>
	);
};

export default TransactionsPage;
