import React from 'react';
import { MyInput } from './UI/input/MyInput';
import { MySelect } from './UI/select/MySelect';

export const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={event => setFilter({ ...filter, query: event.target.value })}
        type="text"
        placeholder="Search..."
      />
      <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
        defaultValue="Sort by..."
        option={[
          { value: 'title', name: 'Sort by title' },
          { value: 'body', name: 'Sort by body' },
        ]}
      />
    </div>
  );
};
