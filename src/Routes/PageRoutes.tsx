import { Route, Routes } from 'react-router-dom';
import Fiteness from '../pages/categories/fitness/Fiteness';
import KetoDiet from '../pages/categories/keto-diet/KetoDiet';
import Nutrition from '../pages/categories/nutrition/Nutrition';
import Home from '../pages/Home/Home';
import SinglePostPage from '../pages/Sinple-post/SinglePostPage';

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":slug" element={<SinglePostPage />} />
      <Route path="/fitness" element={<Fiteness />} />
      <Route path="/nutrition" element={<Nutrition />} />
      <Route path="/keto-diet" element={<KetoDiet />} />
    </Routes>
  );
};

export default PageRoutes;
