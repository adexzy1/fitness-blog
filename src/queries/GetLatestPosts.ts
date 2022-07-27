import { useQuery, gql } from '@apollo/client';

const GET_LATEST_POSTS = gql`
  query {
    posts(first: 3) {
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

const useGetLatestPosts = () => {
  const { loading, data, error } = useQuery(GET_LATEST_POSTS);

  return {
    loading,
    data,
    error,
  };
};

export default useGetLatestPosts;
