import { About } from 'pages/About';
import { Posts } from 'pages/Posts';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/App.css';

export const App = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar__link">
          <a href="/about">About</a>
          <a href="/posts">Posts</a>
        </div>
      </div>
      <Routes>
        <Route path="/about" element={<About />} />

        <Route path="/posts" element={<Posts />} />
      </Routes>
    </>
  );
};
