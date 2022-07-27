import Button from '../../button/Button';
import style from './editorsPickCard.module.css';
import { Post } from '../../../models/models';
import useExcerpt from '../../../hooks/useExcerpt';
import { useNavigate } from 'react-router-dom';

interface Props {
  item: Post;
}

const EditorsPickCard = ({ item }: Props) => {
  // react router hook
  const navigate = useNavigate();
  // custom hook
  const excerpt = useExcerpt(item?.content.text, 148);

  // handle click
  const handleClick = () => {
    navigate(`/${item.slug}`);
  };

  return (
    <section className={style.container}>
      <div className={style.img__wrapper}>
        <img src={item.coverPhoto.url} alt="post-img" />
      </div>

      <div className={style.details__container}>
        <h5>{item.title.toUpperCase()}</h5>

        <p>{excerpt}</p>

        <Button text="Read More" handleClick={handleClick} />
      </div>
    </section>
  );
};

export default EditorsPickCard;
