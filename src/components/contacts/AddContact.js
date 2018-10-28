import React, { Component } from "react";

export default class AddContact extends Component {
  state = {
    name: "Carl",
    email: "c@c.com",
    phone: "454354343543"
  };

  render() {
    const { name, email, phone } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form action="" className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="form-control form-control-lg"
              placeholder="Enter name..."
              value={name}
            />
          </form>
          <form action="" className="form-group">
            <label htmlFor="name">Email</label>
            <input
              type="email"
              name="email"
              className="form-control form-control-lg"
              placeholder="Enter email address..."
              value={email}
            />
          </form>
          <form action="" className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              className="form-control form-control-lg"
              placeholder="Enter phone number..."
              value={phone}
            />
          </form>
          <input
            type="submit"
            value="Add Contact"
            className="btn btn-light btn-block"
          />
        </div>
      </div>
    );
  }
}
