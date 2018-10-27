import React, { Component } from "react";
import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact manager" />

        <div className="container">
          <Contact name="Whisky" email="wtf@wtf.com" phone="333-333-3333" />
          <Contact name="Vodake" email="vodka@wtf.com" phone="333-333-3333" />
          <Contact name="Gin" email="gin@wtf.com" phone="333-333-3333" />
        </div>
      </div>
    );
  }
}

export default App;
