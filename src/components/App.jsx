import React, { useState } from 'react';
import { PostList } from './PostList';
import './styles/App.css';

export const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'React', body: 'Description' },
    { id: 3, title: 'Redux', body: 'Description' },
    { id: 4, title: 'Node.js', body: 'Description' },
  ]);

  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Titel post" />
        <input type="text" placeholder="Description post" />
        <button type="submit">Create post</button>
      </form>
      <PostList posts={posts} title="List 1" />
    </div>
  );
};
