import React, { useState } from 'react';
import { PostFilter } from './PostFilter';
import { PostForm } from './PostForm';
import { PostList } from './PostList';
import './styles/App.css';
import { MyButton } from './UI/button/MyButton';
import { MyModal } from './UI/MyModal/MyModal';
import { usePosts } from 'hooks/usePosts';
import axios from 'axios';

export const App = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);

  const fetchPosts = async () => {
    const pesponse = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    console.log(pesponse.data);
  };

  const createPost = newPost => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  return (
    <div className="App">
      <button onClick={fetchPosts}>Get posts</button>
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Create Post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList remove={removePost} posts={sortedAndSearchPosts} title="List" />
    </div>
  );
};
