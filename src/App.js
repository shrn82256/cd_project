import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Dashboard from './components/Dashboard'
import SchoolDetails from './components/SchoolDetails';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/SchoolDetails/:id" component={SchoolDetails} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
