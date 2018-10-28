import React, { Component } from "react";
import { Consumer } from "../../context";
import uuid from "uuid";
import TextInputGroup from "../layout/TextInputGroup";

export default class AddContact extends Component {
  state = {
    name: "Carl",
    email: "c@c.com",
    phone: "454354343543"
  };

  onSubmit = (dispatch, e) => {
    //   prevents default submitting of the form
    e.preventDefault();

    const { name, email, phone } = this.state;

    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    };

    dispatch({ type: "ADD_CONTACT", payload: newContact });
    console.log(newContact);

    // clear the form after submission
    this.setState({
      name: "",
      email: "",
      phone: ""
    });
  };

  // the brackets get the value of the name attribute of whatever calls onChange
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form
                  className="form-group"
                  onSubmit={this.onSubmit.bind(this, dispatch)}
                >
                  <TextInputGroup
                    label="Name"
                    name="name"
                    value={name}
                    placeholder="Enter your name..."
                    onChange={this.onChange}
                  />
                  <TextInputGroup
                    type="email"
                    label="Email"
                    name="email"
                    value={email}
                    placeholder="Enter your email address..."
                    onChange={this.onChange}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    value={phone}
                    placeholder="Enter your phone number..."
                    onChange={this.onChange}
                  />
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
