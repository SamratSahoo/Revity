import React from 'react';
import './App.css';
import Google from './GoogleMaps/Google';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage/LoginPage';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/explore' exact component={Google} />
        <Route path='/login' exact component={LoginPage} />
        <Route path='/' render={() => <div>404 Not Found</div>} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;