import { useQuery, gql } from '@apollo/client';

const GET_RELATED_POSTS = gql`
  query getRelatedPosts($categories: [Categories!], $length: Int!) {
    posts(where: { category_contains_some: $categories }, first: $length) {
      id
      slug
      author {
        name
      }
      createdAt
      title
    }
  }
`;

const useGetRelatedPosts = (categories: string[], length: number) => {
  const { error, loading, data } = useQuery(GET_RELATED_POSTS, {
    variables: {
      categories,
      length,
    },
  });

  return {
    error,
    data,
    loading,
  };
};

export default useGetRelatedPosts;
