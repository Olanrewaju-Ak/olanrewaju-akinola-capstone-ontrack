import "./Transactions.scss";
import TransactionListItem from "../transaction-list-item/TransactionListItem";

import React from "react";
import { useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import DeleteModal from "../delete-modal/DeleteModal";

const URL = process.env.REACT_APP_BACKEND_URL;
const PORT = process.env.REACT_APP_PORT;

const Transactions = ({ transactions, getTransactions }) => {
	const [selectedTransaction, setSelectedTransaction] = useState({
		description: " ",
		id: " "
	});

	console.log(transactions);
	const [openModal, setOpenModal] = useState(false);

	const deleteTransaction = async () => {
		await axios.delete(`${URL}${PORT}/api/transactions/${selectedTransaction.id}`);
		setOpenModal(false);
		getTransactions();
	};

	const modal = (
		<Modal isOpen={openModal} ariaHideApp={false} className="warehouse-list__delete-modal">
			<DeleteModal
				closeModal={setOpenModal}
				deleteTransaction={deleteTransaction}
				selectedTransaction={selectedTransaction}
			/>
		</Modal>
	);

	return (
		<section className="transactions-list">
			<div className="transactions__title-bar">
				<p className="transactions__title">All Transactions</p>
			</div>
			{transactions?.length
				? transactions.map((transaction) => (
						<TransactionListItem
							transaction={transaction}
							key={transaction.id}
							setSelectedTransaction={setSelectedTransaction}
							setOpenModal={setOpenModal}
						/>
				  ))
				: ""}
			{modal}
		</section>
	);
};

export default Transactions;
