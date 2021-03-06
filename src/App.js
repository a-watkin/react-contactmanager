import React, { Component } from "react";
// browser router stores the route components
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Contacts from "./components/contacts/Contacts";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./context";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";

import Header from "./components/layout//Header";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Test from "./components/test/Test";

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
                <Route exact path="/contact/edit/:id" component={EditContact} />
                {/* <Route exact path="/about/:id" component={About} /> */}
                <Route exact path="/about" component={About} />
                <Route exact path="/test" component={Test} />
                {/* default route */}
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
