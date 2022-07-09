import FeaturedSmallCard from './smallCard/FeaturedSmallCard';
import FeaturedBigCard from './Bigcard/FeaturedBigCard';
import style from './featured.module.css';

const FeaturedPosts = () => {
  return (
    <section className={style.featured__container}>
      <FeaturedBigCard />

      <div className={style.small__featured__container}>
        <FeaturedSmallCard />
        <FeaturedSmallCard />
      </div>
    </section>
  );
};

export default FeaturedPosts;
