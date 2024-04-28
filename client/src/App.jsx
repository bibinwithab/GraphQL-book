import "./App.css";
import BookList from "./components/BookList";
import { ApolloClient } from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
    <div>
      <h1>Hello World</h1>
      <BookList />
    </div>
    </ApolloProvider>
  );
}

export default App;
