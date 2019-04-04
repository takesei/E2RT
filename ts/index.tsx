import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { HashRouter, Link, Route } from 'react-router-dom';

const container = document.getElementById('contents');


const App = () => (
  <HashRouter>
    <div>
      <ul>
        <li> <Link to="/">Home</Link></li>
        <li> <Link to="/about">About</Link></li>
        <li> <Link to="/demo">Demo</Link></li>
      </ul>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/demo" component={Demo} />
    </div>
  </ HashRouter>
);

ReactDom.render(
  <App />,
  container,
);
