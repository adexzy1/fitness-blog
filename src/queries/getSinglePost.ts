import { useQuery, gql } from '@apollo/client';

const GET_SINGLE_POST = gql`
  query getSinglePost($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      createdAt
      slug
      category

      content {
        html
      }

      coverPhoto {
        url
      }

      author {
        name
        displayPicture {
          url
        }
      }

      comments {
        message
        name
        id
        commentReplies {
          id
          message
          name
        }
      }
    }
  }
`;

const useGetSinglePost = (slug: string) => {
  const { loading, error, data } = useQuery(GET_SINGLE_POST, {
    variables: {
      slug,
    },
  });

  return {
    loading,
    error,
    data,
  };
};

export default useGetSinglePost;
