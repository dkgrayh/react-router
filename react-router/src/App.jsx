import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import BookList from './components/BookList';
import Book from './components/Book';
import NewBook from './components/NewBook';
import NotFound from './components/NotFound';
function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/books">BookList</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/books"
          element={<BookList />}
        />
        <Route
          path="/books/:id"
          element={<Book />}
        />
        <Route
          path="/books/new"
          element={<NewBook />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </>
  );
}

export default App;
