import React, { Component } from "react";
import Contact from "./Contact";

export default class Contacts extends Component {
  state = {
    contacts: [
      {
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: "555-555-5555",
        id: 1
      },
      {
        name: "Larry Sheep",
        email: "Larry@gmail.com",
        phone: "555-555-5522",
        id: 2
      },
      {
        name: "Bender Monroe",
        email: "Bender@gmail.com",
        phone: "555-555-5511",
        id: 3
      }
    ]
  };

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
    const { contacts } = this.state;
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
  }
}
