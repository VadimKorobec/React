import React from 'react';
import classes from '../input/MyInput.module.css';

export const MyInput = React.forwardRef((props, ref) => {
  return <input ref={ref} type="text" className={classes.myInput} {...props} />;
});
