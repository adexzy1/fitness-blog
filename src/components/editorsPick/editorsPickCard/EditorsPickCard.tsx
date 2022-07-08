import Button from '../../button/Button';
import editorsImg from '../../../assets/editors-pick-img.png';
import style from './editorsPickCard.module.css';

const EditorsPickCard = () => {
  return (
    <section className={style.container}>
      <div className={style.img__wrapper}>
        <img src={editorsImg} alt="post-img" />
      </div>

      <div className={style.details__container}>
        <h5>THE BEST FOODS TO REFUEL WITH AFTER A HIIT WORKOUT</h5>
        <p>
          With benefits such as weight loss, improved stamina and endurance, and
          stronger muscles, it&apos;s no surprise that HIIT workouts are so in
          demand.
        </p>
        <Button text="Read More" />
      </div>
    </section>
  );
};

export default EditorsPickCard;
