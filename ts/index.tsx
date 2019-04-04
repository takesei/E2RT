import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Link, Route } from 'react-router-dom';
import UserForm from './components/UserForm';
import Store from './Store';

const container = document.getElementById('contents');

const Home = () => (
  <div>
    <h2> home </h2>
    <p> welcome </p>
  </div>
);

const About = () => (
  <div>
    <h2> About </h2>
    <p> about: voting page </p>
  </div>
);

const Demo = () => (
  <Provider store={Store}>
    <div>
      <h2> demo </h2>
      <UserForm />
    </div>
  </Provider>
);

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
