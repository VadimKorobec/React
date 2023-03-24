import { About } from 'pages/About';
import { NotFound } from 'pages/NotFound';
import { Posts } from 'pages/Posts';
import { Routes, Route } from 'react-router-dom';

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
