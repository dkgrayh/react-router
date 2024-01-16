import { Link, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import BookList from './components/BookList';
import Book from './components/Book';
import NewBook from './components/NewBook';
import NotFound from './components/NotFound';
import BookLayout from './BookLayout';
function App() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Routes>
        <Route
          path="/books"
          element={<h1>Extra Content</h1>}
        />
      </Routes>
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
          element={<BookLayout />}
        >
          <Route
            index
            element={<BookList />}
          />
          <Route
            path=":id"
            element={<Book />}
          />
          <Route
            path="new"
            element={<NewBook />}
          />
        </Route>

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </>
  );
}

export default App;
