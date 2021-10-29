import React from "react";
import PropTypes from "prop-types";

const Musicplayer = props => {
	return <li>{props.name}</li>;
};

Musicplayer.propTypes = {
	name: PropTypes.string
};

export default Musicplayer;
