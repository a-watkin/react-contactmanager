import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Contact.css";
import { Consumer } from "../../context";
import axios from "axios";

export default class Contact extends Component {
  state = {
    showContactInfo: true
  };

  // same as the type checking at the end of this file
  static propTypes = {
    contact: PropTypes.object.isRequired
  };

  onShowClick = e => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };

  onDeleteClick = async (id, dispatch) => {
    // added this because the API doesn't allow adding data
    // so it's trying to delete something that isn't there
    // but you still want it to actually remove the contact on the frontend
    try {
      // waits until this returns then does the below dispatch
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    } catch (e) {
      console.log(e);
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  };

  render() {
    // destructuring to pass values
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i
                  onClick={this.onShowClick}
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
              </h4>

              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">{email}</li>
                  <li className="list-group-item">{phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

// Contact.propTypes = {
//   deleteClickHandler: PropTypes.func.isRequired
// };
