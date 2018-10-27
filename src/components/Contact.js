import React, { Component } from "react";

export default class Contact extends Component {
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
