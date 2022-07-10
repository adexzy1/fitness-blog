import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import SinglePostPage from '../pages/Sinple-post/SinglePostPage';

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":id" element={<SinglePostPage />} />
    </Routes>
  );
};

export default PageRoutes;
