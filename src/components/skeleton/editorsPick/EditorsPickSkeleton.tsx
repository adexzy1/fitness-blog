import style from '../skeleton.module.css';
import Skeleton from '../Skeleton';

const EditorsPickSkeleton = () => {
  return (
    <div className={style.editors__pick}>
      <Skeleton type="image" />

      <div className={style.editors__pick_details}>
        <Skeleton type="title" />
        <div className={style.editors__pick_text_container}>
          <Skeleton type="text" />
          <Skeleton type="text" />
          <Skeleton type="text" />
          <Skeleton type="text" />
        </div>

        <Skeleton type="button" />
      </div>
    </div>
  );
};

export default EditorsPickSkeleton;
