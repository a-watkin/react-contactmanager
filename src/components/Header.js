import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  return (
    <div>
      {/* inline styling */}
      {/* <h1 style={{ color: "green", fontSize: "50px" }}>{props.branding}</h1> */}

      {/* styles defined ina  variable */}
      <h1 style={HeadingStyle}>{props.branding}</h1>
    </div>
  );
};

// displays if there is no prop, an empty string doesn't count as no prop
Header.defaultProps = {
  branding: "Default title"
};

// type checking, will display warning in console if type is incorrect
Header.propTypes = {
  branding: PropTypes.string.isRequired
};

const HeadingStyle = {
  color: "green",
  fontSize: "50px"
};

export default Header;
