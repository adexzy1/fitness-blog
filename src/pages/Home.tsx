import EditorsPickList from '../components/editorsPick/EditorsPickList';
import FeaturedPosts from '../components/FeaturesPosts/FeaturedPosts';
import LatestPostList from '../components/latestPosts/LatestPostList';
import NewsLetter from '../components/newsLetter/NewsLetter';

const Home = () => {
  return (
    <section>
      <FeaturedPosts />
      <LatestPostList />
      <EditorsPickList />
      <NewsLetter />
    </section>
  );
};

export default Home;
