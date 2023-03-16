import React, { useState } from 'react';
import { MyButton } from './UI/button/MyButton';
import { MyInput } from './UI/input/MyInput';

export const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = event => {
    event.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };

    create(newPost);
    reset();
  };

  const reset = () => {
    setPost({ title: '', body: '' });
  };

  return (
    <div>
      <form>
        <MyInput
          value={post.title}
          onChange={event => setPost({ ...post, title: event.target.value })}
          type="text"
          placeholder="Titel post"
        />

        {
          <MyInput
            value={post.body}
            onChange={event => setPost({ ...post, body: event.target.value })}
            type="text"
            placeholder="Description post"
          />
        }
        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
    </div>
  );
};
