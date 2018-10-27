import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Contact.css";

export default class Contact extends Component {
  // same as the type checking at the end of this file
  static propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  };

  render() {
    // destructuring to pass values
    const { name, email, phone } = this.props;

    return (
      <div>
        <h4>{name}</h4>
        <ul>
          <li>{email}</li>
          <li>{phone}</li>
        </ul>
      </div>
    );
  }
}

// Contact.propTypes = {
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired
// };
