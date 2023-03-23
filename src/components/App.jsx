import { About } from 'pages/About';
import { Posts } from 'pages/Posts';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/App.css';

export const App = () => {
  return (
    <BrowserRouter>
      <div></div>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/posts">
        <Posts />
      </Route>
    </BrowserRouter>
  );
};
