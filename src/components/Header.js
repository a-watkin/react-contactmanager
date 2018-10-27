import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  const { branding } = props;

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/">{branding}</a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
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
