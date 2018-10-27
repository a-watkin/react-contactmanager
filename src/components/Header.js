import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  return (
    <div>
      <h1>{props.branding}</h1>
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

export default Header;
