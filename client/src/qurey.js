import { gql } from "@apollo/client";

const BOOK_QUERY = gql`
  {
    books {
      name
      id
      author {
        name
      }
    }
  }
`;

export default BOOK_QUERY;
