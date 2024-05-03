import { useState } from 'react'
import './App.css'
import { useQuery } from '@apollo/client'
import BOOK_QUERY from './qurey'

function App() {

  const {data, loading, error} = useQuery(BOOK_QUERY)


  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <>
      <h1>Hello World!</h1>
      {
        data?.books.map((book) => (
          <div key={book.id}>
            <h2>Name: {book.name}</h2>
            <p>Author Name: {book.author.name}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
