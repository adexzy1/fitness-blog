import Skeleton from '../Skeleton';
import style from '../skeleton.module.css';

const SinglePostSkeleton = () => {
  const textSkeleton = [1, 2, 3, 4, 5, 7, 8, 9];

  return (
    <div className={style.single__post}>
      <Skeleton type="cover_photo" />
      <section className={style.single__post_author_details}>
        <Skeleton type="author_img" />

        <div>
          <Skeleton type="name" />
          <Skeleton type="name" />
        </div>
      </section>

      {textSkeleton.map((n) => (
        <section className={style.single__post_text_wrapper}>
          <Skeleton type="text" />
          <Skeleton type="text" />
          <Skeleton type="text" />
          <Skeleton type="text" />
          <Skeleton type="text" />
        </section>
      ))}
    </div>
  );
};

export default SinglePostSkeleton;
