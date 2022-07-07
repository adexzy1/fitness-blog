import React from 'react';
import FeaturedPosts from '../components/FeaturesPosts/FeaturedPosts';
import LatestPostList from '../components/latest posts/LatestPostList';

const Home = () => {
  return (
    <section>
      <FeaturedPosts />
      <LatestPostList />
    </section>
  );
};

export default Home;
