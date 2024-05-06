import BOOK_QUERY from "../qurey";
import { useQuery } from "@apollo/client";

const ShowBooks = () => {
  const { data, loading, error } = useQuery(BOOK_QUERY);

  if (loading) return <p className="text-3xl font-bold text-center m-8">Loading...</p>;
  if (error) return <p className="text-3xl font-bold text-center m-8">Error: {error.message}</p>;

  return (
    <div className="grid grid-cols-4 gap-4">
      {data?.books.map((book) => (
        <div className="flex flex-col items-center justify-center px-6 py-4 bg-amber-400 border-0 rounded-md hover:bg-amber-500 cursor-pointer" key={book.id}>
          <h2 className="text-fuchsia-800 font-bold uppercase ">Name: {book.name}</h2>
          <p className="text-slate-700  uppercase">Author Name: {book.author.name}</p>
          <p className="text-fuchsia-900  uppercase">Genre: {book.genre}</p>

        </div>
      ))}
    </div>
  );
};

export default ShowBooks;
