import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_BOOK_MUTATION, AUTHOR_QUERY, BOOK_QUERY } from "../queries";

const AddBook = () => {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthorId] = useState("");
  const { loading, error, data } = useQuery(AUTHOR_QUERY);
  const [addBook] = useMutation(ADD_BOOK_MUTATION, {
    refetchQueries: [{ query: BOOK_QUERY }],
  });

  const submitForm = (e) => {
    e.preventDefault();
    addBook({
      variables: {
        name,
        genre,
        authorId,
      },
    });
    setName("");
    setGenre("");
    setAuthorId("");
  };

  if (loading) return <p>Loading authors...</p>;
  if (error) return <p>Error loading authors!</p>;

  return (
    <form onSubmit={submitForm}>
      <div>
        <label>Book name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Genre:</label>
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
      </div>
      <div>
        <label>Author:</label>
        <select value={authorId} onChange={(e) => setAuthorId(e.target.value)}>
          <option>Select author</option>
          {data.authors.map((author) => (
            <option key={author.id} value={author.id}>
              {author.name}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
