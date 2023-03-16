import React, { useState } from 'react';
import { PostList } from './PostList';
import './styles/App.css';
import { MyButton } from './UI/button/MyButton';
import { MyInput } from './UI/input/MyInput';

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
        <MyInput type="text" placeholder="Titel post" />
        <MyInput type="text" placeholder="Description post" />
        <MyButton type="submit">Create post</MyButton>
      </form>
      <PostList posts={posts} title="List 1" />
    </div>
  );
};
