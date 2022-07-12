import React from 'react';
import PostCard from '../PostCard/PostCard';
import style from './blogList.module.css';

interface Props {
  data: number[];
}

const BlogList = ({ data }: Props) => {
  return (
    <main className={style.blog__list__wrapper}>
      {data.map((ittem, index) => (
        <PostCard key={index} />
      ))}
    </main>
  );
};

export default BlogList;
