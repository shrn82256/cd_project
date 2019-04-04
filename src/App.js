import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import SchoolDetail from "./components/SchoolDetail";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/school/:id" component={SchoolDetail} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
