import EditorsPickList from '../../components/editorsPick/EditorsPickList';
import FeaturedPosts from '../../components/FeaturesPosts/FeaturedPosts';
import LatestPostList from '../../components/latestPosts/LatestPostList';
import NewsLetter from '../../components/newsLetter/NewsLetter';
import TabTitle from '../../utils/TabTitle';

const Home = () => {
  // function to set page title
  TabTitle('WorkOut & believe in yourself');
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
