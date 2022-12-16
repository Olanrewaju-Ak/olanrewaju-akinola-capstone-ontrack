import "./Header.scss";
import logo from "../../assets/logos/ontrack-logo.png";

import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
	return (
		<header className="header">
			<section className="header-container">
				<Link to="/home">
					<img
						src={logo}
						alt="logo"
						// width="150px"
						// height="40px"
						className="header__logo"
					/>
				</Link>
				<nav className="header-nav">
					<div className="header-nav__link-container">
						<NavLink
							to={"/home"}
							className={({ isActive }) =>
								isActive ? "header-nav__link--active" : "header-nav__link"
							}
						>
							<p className="header-nav__text">Home</p>
						</NavLink>
					</div>
					<div className="header-nav__link-container">
						<NavLink
							to={"/account"}
							className={({ isActive }) =>
								isActive ? "header-nav__link--active" : "header-nav__link"
							}
						>
							<p className="header-nav__text">Transactions</p>
						</NavLink>
					</div>
					<div className="header-nav__link-container">
						<NavLink
							to={"/budgets"}
							className={({ isActive }) =>
								isActive ? "header-nav__link--active" : "header-nav__link"
							}
						>
							<p className="header-nav__text">Budgets</p>
						</NavLink>
					</div>
				</nav>
			</section>
		</header>
	);
};

export default Header;
