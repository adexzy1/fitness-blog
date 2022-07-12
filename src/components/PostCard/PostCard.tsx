import postImg from '../../assets/post-img.png';
import Button from '../button/Button';
import { useNavigate } from 'react-router-dom';
import style from './postCard.module.css';

const PostCard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/1');
  };

  return (
    <section className={style.wrapper}>
      <div className={style.img__wrapper}>
        <img src={postImg} alt="post-img" />
      </div>

      <div className={style.details__wrapper}>
        <h5>How to Build Muscle as a Woman</h5>
        <p>
          I overcame an eating disorder, discovered a love for heavy strength
          training, and now I help women
        </p>

        <Button text="Read More" handleClick={handleClick} />
      </div>
    </section>
  );
};

export default PostCard;
