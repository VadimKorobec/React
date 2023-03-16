import React from 'react';
import classes from '../input/MyInput.module.css';

export const MyInput = props => {
  return <input type="text" className={classes.myInput} {...props} />;
};
