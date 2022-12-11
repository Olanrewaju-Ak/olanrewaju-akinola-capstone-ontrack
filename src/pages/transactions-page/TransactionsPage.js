import React from "react";
import Addtransaction from "../../components/add-transaction/AddTransactions";
import Transactions from "../../components/transactions/Transactions";

const TransactionsPage = ({
	transactions,
	selectedTransaction,
	deleteTransaction,
	setSelectedTransaction,
	getTransactions
}) => {
	return (
		<div>
			<Addtransaction
				transactions={transactions}
				selectedTransaction={selectedTransaction}
				getTransactions={getTransactions}
			/>
			<Transactions
				transactions={transactions}
				selectedTransaction={selectedTransaction}
				deleteTransaction={deleteTransaction}
				setSelectedTransaction={setSelectedTransaction}
			/>
		</div>
	);
};

export default TransactionsPage;
