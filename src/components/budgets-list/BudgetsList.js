import React from "react";

import "./BudgetsList.scss";
import BudgetCard from "../budget-card/BudgetCard";

const BudgetsList = ({
	budgets,
	totalHousing,
	totalFood,
	totalTransport,
	totalPersonal,
	totalLifestyle,
	totalUtility,
	totalMedical,
	totalOthers
}) => {
	return (
		<section className="budgets-list">
			<p className="budgets-title">Budgets</p>

			{budgets?.length
				? budgets.map((budget) => (
						<BudgetCard
							budgets={budgets}
							budget={budget}
							key={budget.id}
							totalHousing={totalHousing}
							totalFood={totalFood}
							totalTransport={totalTransport}
							totalPersonal={totalPersonal}
							totalLifestyle={totalLifestyle}
							totalUtility={totalUtility}
							totalMedical={totalMedical}
							totalOthers={totalOthers}
							// setSelectedTransaction={setSelectedTransaction}
							// setOpenModal={setOpenModal}
						/>
				  ))
				: ""}
		</section>
	);
};

export default BudgetsList;
