import "./OverView.scss";
import React from "react";

import Modal from "react-modal";
import AddForm from "../add-form/AddForm";
import { useState } from "react";

const OverView = () => {
	const [isAddformVisible, setAddForm] = useState(false);

	const modal = (
		// <Modal isOpen={isAddformVisible} ariaHideApp={false}>
		<AddForm />
		// {/* </Modal> */}
	);

	return (
		<div className="overview">
			<div className="overview-income">
				<p>Income</p>
				<p>$1000</p>
			</div>
			<div className="overview-expenses">
				<p>Income</p>
				<p>$200</p>
			</div>
			<div className="overview-balance">
				<p>Income</p>
				<p>$800</p>
			</div>
			<button onClick={() => setAddForm(!isAddformVisible)}>
				{isAddformVisible ? "Cancel" : "ADD"}
			</button>
			{isAddformVisible && modal}
		</div>
	);
};

export default OverView;
