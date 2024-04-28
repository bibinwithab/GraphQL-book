import {gql} from 'apollo-boost';
import { graphql } from "react-apollo";

const getBooksQuery = gql`
    {
        books {
            name
            id
        }
    }
`
const displayBooks  = () =>{
    var data = this.props.data;
    if (data.loading){
        return <div>Loading books...</div>
    } else {
        return data.books.map(book => {
            return (
                <li key={book.id}>{book.name}</li>
            )
        })
    }

}

const BookList = () => {
  return (
    <div>
      <ul id="book-list">
        {this.displayBooks()}
      </ul>
    </div>
  );
};

export default graphql(getBooksQuery)(BookList);
