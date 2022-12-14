import React from "react";
import Addtransaction from "../../components/add-transaction/AddTransactions";

import RecentTransactions from "../../components/recentTransactions/recentTransactions";
import Transactions from "../../components/transactions/Transactions";

const TransactionsPage = ({ transactions, getTransactions, updateTransactions }) => {
	return (
		<div>
			<Addtransaction
				transactions={transactions}
				getTransactions={getTransactions}
				updateTransactions={updateTransactions}
			/>
			<RecentTransactions transactions={transactions} getTransactions={getTransactions} />
		</div>
	);
};

export default TransactionsPage;
