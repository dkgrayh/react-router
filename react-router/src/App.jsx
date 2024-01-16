import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import BookList from './components/BookList';

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
      </Routes>
    </>
  );
}

export default App;
