import { gql } from "@apollo/client";

export const BOOK_QUERY = gql`
  {
    books {
      name
      id
      genre
      author {
        name
      }
    }
  }
`;

export const AUTHOR_QUERY = gql`
  {
    authors {
      id
      name
    }
  }
`;

export const ADD_BOOK_MUTATION = gql`
  mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      id
      name
      genre
      author {
        name
      }
    }
  }
`;

export default {
  BOOK_QUERY,
  AUTHOR_QUERY,
  ADD_BOOK_MUTATION,
};
