import React, { createContext, useState } from 'react'
import { v4 as uuid } from 'uuid'

export const BookContext = createContext()

const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([
    { title: 'Demian', author: 'abc', id: 1 },
    { title: 'asdf', author: 'qwer', id: 2 },
    { title: 'zxcv', author: 'afd', id: 3 }
  ])

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuid() }])
  }

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id))
  }

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {children}
    </BookContext.Provider>
  )
}

export default BookContextProvider
