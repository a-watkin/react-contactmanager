import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
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

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
