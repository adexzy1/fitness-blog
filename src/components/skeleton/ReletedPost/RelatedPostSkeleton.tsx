import Skeleton from '../Skeleton';
import style from '../skeleton.module.css';

const RelatedPostSkeleton = () => {
  return (
    <div className={style.related_post}>
      <Skeleton type="title" />
      <Skeleton type="name" />
      <Skeleton type="name" />
    </div>
  );
};

export default RelatedPostSkeleton;
