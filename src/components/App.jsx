import React, { useState } from 'react';
import { PostForm } from './PostForm';
import { PostList } from './PostList';
import './styles/App.css';

export const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'React', body: 'Description' },
    { id: 3, title: 'Redux', body: 'Description' },
    { id: 4, title: 'Node.js', body: 'Description' },
  ]);

  const createPost = newPost => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList posts={posts} title="List 1" />
    </div>
  );
};
