import { Link } from 'react-router-dom';
import useTimeAgo from '../../../hooks/useTimeAgo';
import { RelatedPost } from '../../../models/models';
import style from './relatedPostCard.module.css';

interface Props {
  item: RelatedPost;
}

const RelatedPostCard = ({ item }: Props) => {
  // custom hook
  const { timeAgo } = useTimeAgo(item?.createdAt);

  return (
    <Link to={`/${item.slug}`} className={style.container}>
      <h5>{item.title}</h5>

      <div className={style.details}>
        <div>
          <h5>{item.author.name}</h5>
          <p>{timeAgo()}</p>
        </div>
      </div>
    </Link>
  );
};

export default RelatedPostCard;
