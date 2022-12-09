import "./Header.scss";
import logo from "../../assets/logos/ontrack-logo.png";

import React from "react";

const Header = () => {
	return (
		<header className="header">
			<nav className="header__nav">
				<img src={logo} alt="logo" width="150px" height="40px" className="header__logo" />
			</nav>
		</header>
	);
};

export default Header;
