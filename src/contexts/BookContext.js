import React, { createContext, useReducer, useEffect } from 'react'
import { bookReducer } from '../reducers/bookReducer'

export const BookContext = createContext()

const BookContextProvider = ({ children }) => {
  const [books, dispatch] = useReducer(
    bookReducer,
    [
      // { title: 'Demian', author: 'abc', id: 1 },
      // { title: 'asdf', author: 'qwer', id: 2 },
      // { title: 'zxcv', author: 'afd', id: 3 }
    ],
    () => {
      const localData = localStorage.getItem('books')
      return localData ? JSON.parse(localData) : []
    }
  )

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  }, [books])

  // const addBook = (title, author) => {
  //   setBooks([...books, { title, author, id: uuid() }])
  // }

  // const removeBook = (id) => {
  //   setBooks(books.filter((book) => book.id !== id))
  // }

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {children}
    </BookContext.Provider>
  )
}

export default BookContextProvider
