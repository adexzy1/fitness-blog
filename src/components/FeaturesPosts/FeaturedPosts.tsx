import FeaturedSmallCard from './smallCard/FeaturedSmallCard';
import FeaturedBigCard from './Bigcard/FeaturedBigCard';
import style from './featured.module.css';
import useGetPosts from '../../queries/getPosts';
import { Post } from '../../models/models';

const FeaturedPosts = () => {
  const { data, loading, error } = useGetPosts(['Featured'], 3);

  return (
    <section className={style.featured__container}>
      {loading && <div>Loading....</div>}

      {error && <div>An Error Occurred</div>}

      {data && (
        <>
          <FeaturedBigCard item={data.posts[0]} />

          <div className={style.small__featured__container}>
            {data.posts.slice(1, 3).map((item: Post) => (
              <FeaturedSmallCard key={item.id} item={item} />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default FeaturedPosts;
