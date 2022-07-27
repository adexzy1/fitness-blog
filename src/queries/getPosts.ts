import { useQuery, gql } from '@apollo/client';

const GET_POSTS = gql`
  query getPosts($category: [Categories!], $length: Int!) {
    posts(where: { category_contains_some: $category }, first: $length) {
      title
      content {
        text
      }
      coverPhoto {
        url
      }
      author {
        displayPicture {
          url
        }
        name
      }
      publishedAt
      slug
      category
      createdAt
      id
    }
  }
`;

const useGetPosts = (category: string[], length: number) => {
  const { error, loading, data } = useQuery(GET_POSTS, {
    variables: {
      category,
      length,
    },
  });

  return {
    error,
    loading,
    data,
  };
};

export default useGetPosts;
