import React from 'react';
import './styles/App.css';
import { AppRouter } from './AppRouter';
import { NavBar } from './UI/NavBar/NavBar';

export const App = () => {
  return (
    <>
      <NavBar />
      <AppRouter />
    </>
  );
};
