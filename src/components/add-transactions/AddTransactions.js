import React from "react";
import { useState, useEffect } from "react";
import AddForm from "../add-form/AddForm";

const Addtransaction = (props) => {
	const [isAddformVisible, setAddFormVisible] = useState(false);

	const modal = (
		// <Modal isOpen={isAddformVisible} ariaHideApp={false}>
		<AddForm setAddFormVisible={setAddFormVisible} addTransactions={props.addTransactions} />
		// {/* </Modal> */}
	);

	return (
		<div>
			Addtransaction
			<button onClick={() => setAddFormVisible(!isAddformVisible)}>
				{isAddformVisible ? "Cancel" : "ADD"}
			</button>
			{isAddformVisible && modal}
		</div>
	);
};

export default Addtransaction;
