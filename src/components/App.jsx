import { About } from 'pages/About';
import { Posts } from 'pages/Posts';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';

export const App = () => {
  return (
    <BrowserRouter>
      <div className="navbar">
        <div className="navbar__link">
          <a href="/about">About</a>
          <a href="/posts">Posts</a>
        </div>
      </div>
      <Routes>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/posts">
          <Posts />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
