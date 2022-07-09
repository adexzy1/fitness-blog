import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import SinglePost from '../pages/Sinple-post/SinglePost';

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":id" element={<SinglePost />} />
    </Routes>
  );
};

export default PageRoutes;
