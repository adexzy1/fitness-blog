import { Link } from 'react-router-dom';
import style from './relatedPostCard.module.css';

const RelatedPostCard = () => {
  return (
    <Link to={'/'} className={style.container}>
      <h5>THE LIVING EMOJI</h5>

      <div className={style.details}>
        <div>
          <h5>John kim</h5>
          <p>Posted on 3 Jul</p>
        </div>
      </div>
    </Link>
  );
};

export default RelatedPostCard;
