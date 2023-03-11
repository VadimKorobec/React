import React, { useState } from 'react';

export const App = () => {
  const [likes, setLikes] = useState(0);
  const [value, setValue] = useState('TEXT IN INPUT');

  const increment = () => {
    setLikes(likes + 1);
  };

  const decrement = () => {
    setLikes(likes - 1);
  };

  return (
    <div>
      <h1>{likes}</h1>
      <h1>{value}</h1>
      <input type="text" value={value} onChange={event => event.target.value} />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};
