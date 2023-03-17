import React from 'react';
import classes from '../MyModal/MyModal.module.css';

export const MyModal = ({ children, visible, setVisible }) => {
  const rootClasses = [classes.myModal];

  if (visible) {
    rootClasses.push(classes.active);
  }
  return (
    <div className={rootClasses.join(' ')}>
      <div className={classes.myModalContent}>{children}</div>
    </div>
  );
};
