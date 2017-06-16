import React from 'react';

const Header = (props) => {
	return (
		<h2 className="header">{props.headerText}</h2>
	);
};

export default Header;