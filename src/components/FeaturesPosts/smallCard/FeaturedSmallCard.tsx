import { CgArrowTopRight } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import useExcerpt from '../../../hooks/useExcerpt';
import { Post } from '../../../models/models';
import style from './featuredSmallCard.module.css';

interface Props {
  item: Post;
}

const FeaturedSmallCard = ({ item }: Props) => {
  const title = useExcerpt(item?.title, 21);
  const excerpt = useExcerpt(item?.content.text, 117);

  return (
    <div className={style.small__featured__wrapper}>
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <Link to={`/${item.slug}`}>
        <CgArrowTopRight />
        Explore More
      </Link>
    </div>
  );
};

export default FeaturedSmallCard;
