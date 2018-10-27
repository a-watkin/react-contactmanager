import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../context";

export default class Contacts extends Component {
  deleteContact = id => {
    const { contacts } = this.state;
    // copy of old state modified to the new state
    const newContacts = contacts.filter(contact => contact.id !== id);
    // set state to the new state
    this.setState({
      contacts: newContacts
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              {contacts.map(contact => (
                <Contact
                  key={contact.id}
                  contact={contact}
                  deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
