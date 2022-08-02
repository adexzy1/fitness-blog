import React from 'react';
import Skeleton from '../Skeleton';
import style from '../skeleton.module.css';

const PostCardSkeleton = () => {
  return (
    <div className={style.post__card_skeleton}>
      <Skeleton type="image" />
      <Skeleton type="title" />
      <Skeleton type="text" />
      <Skeleton type="text" />
      <Skeleton type="text" />
      <Skeleton type="button" />
    </div>
  );
};

export default PostCardSkeleton;
