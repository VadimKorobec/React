import React, { useState } from 'react';
import { PostForm } from './PostForm';
import { PostList } from './PostList';
import './styles/App.css';
import { MySelect } from './UI/select/MySelect';

export const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'React', body: 'Description' },
    { id: 3, title: 'Redux', body: 'Description' },
    { id: 4, title: 'Node.js', body: 'Description' },
  ]);
  const [selectedSort, setSelectedSort] = useState('');

  const createPost = newPost => {
    setPosts([...posts, newPost]);
  };

  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  const sortPosts = sort => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Sort by..."
          option={[
            { value: 'title', name: 'Sort by title' },
            { value: 'body', name: 'Sort by body' },
          ]}
        />
      </div>
      {posts.length ? (
        <PostList remove={removePost} posts={posts} title="List" />
      ) : (
        <h1 style={{ textAlign: 'center' }}>Posts not find</h1>
      )}
    </div>
  );
};
