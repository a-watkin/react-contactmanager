import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";

export default class AddContact extends Component {
  state = {
    name: "Carl",
    email: "c@c.com",
    phone: "454354343543",
    errors: {}
  };

  onSubmit = async (dispatch, e) => {
    //   prevents default submitting of the form
    e.preventDefault();

    const { name, email, phone } = this.state;

    if (name === "") {
      this.setState({ errors: { name: "Name is required." } });
      return;
    }

    if (email === "") {
      this.setState({ errors: { email: "Email is required." } });
      return;
    }

    if (phone === "") {
      this.setState({ errors: { phone: "Phone is required." } });
      return;
    }

    const newContact = {
      name,
      email,
      phone
    };

    // newContact is the data about the new user that you're sending
    const res = await axios.post(
      `https://jsonplaceholder.typicode.com/users`,
      newContact
    );

    dispatch({ type: "ADD_CONTACT", payload: res.data });

    // clear the form after submission
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });

    // redirect back to the home page
    this.props.history.push("/");
  };

  // the brackets get the value of the name attribute of whatever calls onChange
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone, errors } = this.state;

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
                    error={errors.name}
                  />
                  <TextInputGroup
                    type="email"
                    label="Email"
                    name="email"
                    value={email}
                    placeholder="Enter your email address..."
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    value={phone}
                    placeholder="Enter your phone number..."
                    onChange={this.onChange}
                    error={errors.phone}
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
