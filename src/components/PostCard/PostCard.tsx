import Button from '../button/Button';
import { useNavigate } from 'react-router-dom';
import style from './postCard.module.css';
import { Post } from '../../models/models';
import useExcerpt from '../../hooks/useExcerpt';

interface Props {
  item: Post;
}

const PostCard = ({ item }: Props) => {
  // React-Rouer Hook
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${item.slug}`);
  };

  // custom hook
  const excerpt = useExcerpt(item.content.text, 98);

  return (
    <section className={style.wrapper}>
      <div className={style.img__wrapper}>
        <img src={item.coverPhoto.url} alt="post-img" />
      </div>

      <div className={style.details__wrapper}>
        <h5>{item.title}</h5>
        <p>{excerpt}</p>

        <Button text="Read More" handleClick={handleClick} />
      </div>
    </section>
  );
};

export default PostCard;
