import React from "react";
import { useNavigate } from "react-router-dom";
import smiley from "../../assets/images/smiley.png";

import "./LandingPage.scss";

const LandingPage = () => {
	const navigate = useNavigate();
	return (
		<section className="landing-page">
			<div className="landing-page__container">
				<p className="landing-page__title">Welcome back John !!!</p>
				<img src={smiley} alt="welcome-smiley" className="landing-page__image" />

				<button
					onClick={() => {
						navigate("/home");
					}}
					className="landing-page__btn--secondary"
				>
					CONTINUE
				</button>
			</div>
		</section>
	);
};

export default LandingPage;
