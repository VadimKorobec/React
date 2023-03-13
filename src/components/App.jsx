import React from 'react';
import { PostItem } from './PostItem';

export const App = () => {
  return (
    <>
      <PostItem post={{ id: 1, title: 'JavaScript', body: 'Description' }} />
    </>
  );
};
