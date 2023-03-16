import React from 'react';
import classes from '../button/MyButton.module.css';

export const MyButton = props => {
  return <button className={classes.myBtn}>{props.children}</button>;
};
