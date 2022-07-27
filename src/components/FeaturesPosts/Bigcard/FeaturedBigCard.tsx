import Button from '../../button/Button';
import style from './featuredBigCard.module.css';
import { Post } from '../../../models/models';
import useExcerpt from '../../../hooks/useExcerpt';
import { useNavigate } from 'react-router-dom';

interface Props {
  item: Post;
}

const FeaturedBigCard = ({ item }: Props) => {
  // raect-router hooks
  const navigate = useNavigate();
  // custom hook

  const excerpt = useExcerpt(item?.content.text, 274);
  const subHeading = useExcerpt(item?.content.text, 15);

  const handleClick = () => {
    navigate(`/${item.slug}`);
  };

  return (
    <section className={style.big__featured__wrapper}>
      <div className={style.big__featured__imgWrapper}>
        <img src={item.coverPhoto.url} alt="featured" />
      </div>

      <div className={style.big__feauted__details}>
        <div>
          <h1>{item.category[0]}</h1>
          <h4>{subHeading}</h4>
        </div>

        <p>{excerpt}...</p>
        <Button text={'Read More'} handleClick={handleClick} />
      </div>
    </section>
  );
};

export default FeaturedBigCard;
