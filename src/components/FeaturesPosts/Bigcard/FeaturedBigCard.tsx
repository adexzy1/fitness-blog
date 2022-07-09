import Button from '../../button/Button';
import featured from '../../../assets/featured.png';
import style from './featuredBigCard.module.css';

const FeaturedBigCard = () => {
  return (
    <section className={style.big__featured__wrapper}>
      <div className={style.big__feauted__details}>
        <div>
          <h1>4 WEEK</h1>
          <h4>WORKOUT PLAN</h4>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          fringilla, lacus eget consequat tincidunt, lectus ex bibendum libero,
          eget iaculis quam arcu quis mauris. Donec ex neque, egestas in
          faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Maecenas
        </p>
        <Button text={'Read More'} />
      </div>

      <div className={style.big__featured__imgWrapper}>
        <img src={featured} alt="featured" />
      </div>
    </section>
  );
};

export default FeaturedBigCard;
