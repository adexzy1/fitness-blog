import { Post } from '../../models/models';
import useGetPosts from '../../queries/getPosts';
import CategoryHeader from '../category header/CategoryHeader';
import EditorsPickSkeleton from '../skeleton/editorsPick/EditorsPickSkeleton';
import EditorsPickCard from './editorsPickCard/EditorsPickCard';
import style from './editorsPickList.module.css';

const EditorsPickList = () => {
  const { data, loading, error } = useGetPosts(['EditorsPick'], 3);

  const skeleton = [1, 2, 3];

  return (
    <section className={style.container}>
      <CategoryHeader title="Editor's Pick" />

      <div className={style.post__list}>
        {loading && (
          <>
            {skeleton.map((n) => (
              <EditorsPickSkeleton key={n} />
            ))}
          </>
        )}

        {error && <div>An Error Occcured</div>}

        {data && (
          <>
            {data.posts.map((item: Post) => (
              <EditorsPickCard key={item.id} item={item} />
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default EditorsPickList;
