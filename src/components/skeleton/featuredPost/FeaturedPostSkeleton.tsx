import Skeleton from '../Skeleton';
import style from './featuredSkeleton.module.css';

const FeaturedPostSkeleton = () => {
  return (
    <div className={style.featured__post}>
      <div className={style.featured__post_big_card}>
        <div className={style.featured__post_big_card_image_wrapper}>
          <Skeleton type="image" />
        </div>

        <section className={style.big__featured__details}>
          <Skeleton type="featured_title" />
          <Skeleton type="title" />

          <div className={style.featured__post_big_card_text_wrapper}>
            <Skeleton type="text" />
            <Skeleton type="text" />
            <Skeleton type="text" />
            <Skeleton type="text" />
            <Skeleton type="text" />
            <Skeleton type="text" />
          </div>

          <Skeleton type="button" />
        </section>
      </div>

      <div className={style.featured__post_small_card_container}>
        <div className={style.featured__post_small_card}>
          <Skeleton type="title" />
          <Skeleton type="text" />
          <Skeleton type="text" />
          <Skeleton type="text" />
          <Skeleton type="text" />
          <Skeleton type="text" />
        </div>

        <div className={style.featured__post_small_card}>
          <Skeleton type="title" />
          <Skeleton type="text" />
          <Skeleton type="text" />
          <Skeleton type="text" />
          <Skeleton type="text" />
          <Skeleton type="text" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedPostSkeleton;
