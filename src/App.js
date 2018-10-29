import React, { Component } from "react";
// browser router stores the route components
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Contacts from "./components/contacts/Contacts";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./context";
import AddContact from "./components/contacts/AddContact";

import Header from "./components/layout//Header";
import About from "./components/pages/About";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                {/* <Route exact path="/about/:id" component={About} /> */}
                <Route exact path="/about" component={About} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
