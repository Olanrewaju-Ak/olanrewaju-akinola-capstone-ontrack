import React from "react";
import Addtransaction from "../../components/add-transaction/AddTransactions";
import Transactions from "../../components/transactions/Transactions";

const TransactionsPage = ({ transactions, getTransactions }) => {
	return (
		<div>
			<Addtransaction transactions={transactions} getTransactions={getTransactions} />
			<Transactions transactions={transactions} getTransactions={getTransactions} />
		</div>
	);
};

export default TransactionsPage;
