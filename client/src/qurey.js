import { gql } from "@apollo/client";

const BOOK_QUERY = gql`
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

export default BOOK_QUERY;
