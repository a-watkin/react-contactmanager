import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = props => {

  const style = {
    color: 'black',
    fontSize: '1.5em'
  }

  // strips this property from the props object
  const { branding } = props;

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-success mb-3 py-0">
      <div className="container">
        <a style={style} href="/">{branding}</a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              {/* react router link */}
              <Link to="/" className="nav-link">
                <i className="fas fa-home" />
                Home
              </Link>
            </li>
            <li className="nav-item">
              {/* react router link */}
              <Link to="/contact/add" className="nav-link">
                <i className="fas fa-plus" />
                Add
              </Link>
            </li>
            <li className="nav-item">
              {/* react router link */}
              <Link to="/about" className="nav-link">
                <i className="fas fa-question" />
                About
              </Link>
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

export default Header;
