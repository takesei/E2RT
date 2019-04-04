import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Store from '../Store';
import UserForm from './UserForm';

export const Home = () => (
  <div>
    <h2> home </h2>
    <p> welcome </p>
  </div>
);

export const About = () => (
  <div>
    <h2> About </h2>
    <p> about: voting page </p>
  </div>
);

export const Demo = () => (
  <Provider store={Store}>
    <div>
      <h2> demo </h2>
      <UserForm />
    </div>
  </Provider>
);

