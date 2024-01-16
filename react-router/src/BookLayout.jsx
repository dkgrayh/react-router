import { Link, Outlet, useSearchParams } from 'react-router-dom';
export default function BookLayout() {
  const [searchParams, setSearchParams] = useSearchParams({ n: 1 });
  const number = searchParams.get('n');
  return (
    <>
      <Link to={`/books/${number}`}>Book {number}</Link>
      <br />
      <Link to="/books/2">Book 2</Link>
      <br />
      <Link to="/books/3">Book 3</Link>
      <br />
      <Link to="/books/new">New Book</Link>
      <Outlet context={{ hello: 'World' }} />
      <input
        type="number"
        value={number}
        onChange={(event) => setSearchParams({ n: event.target.value })}
      />
    </>
  );
}
