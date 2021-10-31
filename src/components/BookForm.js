import React, { useState, useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

const NewBookForm = () => {
  const { addBook } = useContext(BookContext)
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const handleSubmit = (e) => {
    e.prevenDefault()
    addBook(title, author)
    setTitle('')
    setAuthor('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="book title"
        value={title}
        onChange={({ target }) => setTitle(target.value)}
        required
      />
      <input
        type="text"
        placeholder="author"
        value={author}
        onChange={({ target }) => setAuthor(target.value)}
        required
      />
      {/* <input type="submit" value="add book" /> */}
      <button type="submit">add book</button>
    </form>
  )
}

export default NewBookForm
