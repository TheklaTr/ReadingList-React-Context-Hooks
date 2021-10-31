import NewBookForm from './components/BookForm'
import BookList from './components/BookList'
import Navbar from './components/Navbar'
import BookContextProvider from './contexts/BookContext'
import './styles.css'

export default function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <NewBookForm />
      </BookContextProvider>
    </div>
  )
}
