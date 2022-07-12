import { Route, Routes } from 'react-router-dom';
import Fiteness from '../pages/fitness/Fiteness';
import Home from '../pages/Home/Home';
import KetoDiet from '../pages/keto-diet/KetoDiet';
import Nutrition from '../pages/nutrition/Nutrition';
import SinglePostPage from '../pages/Sinple-post/SinglePostPage';

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":id" element={<SinglePostPage />} />
      <Route path="/fitness" element={<Fiteness />} />
      <Route path="/nutrition" element={<Nutrition />} />
      <Route path="/keto-diet" element={<KetoDiet />} />
    </Routes>
  );
};

export default PageRoutes;
