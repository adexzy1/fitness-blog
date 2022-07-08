import CategoryHeader from '../category header/CategoryHeader';
import EditorsPickCard from './editorsPickCard/EditorsPickCard';
import style from './editorsPickList.module.css';

const EditorsPickList = () => {
  return (
    <section className={style.container}>
      <CategoryHeader title="Editor's Pick" />

      <div className={style.post__list}>
        <EditorsPickCard />
        <EditorsPickCard />
        <EditorsPickCard />
      </div>
    </section>
  );
};

export default EditorsPickList;
