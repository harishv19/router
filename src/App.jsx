import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import FullStackDevelopment from './components/FullStackDevelopment';
import DataScience from './components/DataScience';
import CyberSecurity from './components/CyberSecurity';
import CareerAs from './components/CareerAs';

function App() {
  return (
    <Router>
      <div>
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/">All</Link>
            </li>
            <li>
              <Link to="/full-stack-development">Full Stack Development</Link>
            </li>
            <li>
              <Link to="/data-science">Data Science</Link>
            </li>
            <li>
              <Link to="/cyber-security">Cyber Security</Link>
            </li>
            <li>
              <Link to="/career-as">Career As</Link>
            </li>
          </ul>
        </nav>
        <div class="card">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/full-stack-development" component={FullStackDevelopment} />
          <Route path="/data-science" component={DataScience} />
          <Route path="/cyber-security" component={CyberSecurity} />
          <Route path="/career-as" component={CareerAs} />
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

