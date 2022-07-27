import { Post } from '../../models/models';
import PostCard from '../PostCard/PostCard';
import style from './blogList.module.css';

interface Props {
  data: Post[];
}

const BlogList = ({ data }: Props) => {
  return (
    <main className={style.blog__list__wrapper}>
      {data.map((item) => (
        <PostCard key={item.id} item={item} />
      ))}
    </main>
  );
};

export default BlogList;
