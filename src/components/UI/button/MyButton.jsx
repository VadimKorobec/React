import React from 'react';
import classes from '../button/MyButton.module.css';

export const MyButton = ({ children, ...props }) => {
  return (
    <button className={classes.myBtn} {...props}>
      {children}
    </button>
  );
};
