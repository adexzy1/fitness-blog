import EditorsPickList from '../components/editorsPick/EditorsPickList';
import FeaturedPosts from '../components/FeaturesPosts/FeaturedPosts';
import LatestPostList from '../components/latestPosts/LatestPostList';

const Home = () => {
  return (
    <section>
      <FeaturedPosts />
      <LatestPostList />
      <EditorsPickList />
    </section>
  );
};

export default Home;
