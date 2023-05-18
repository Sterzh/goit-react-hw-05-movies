import MovieInfo from 'components/MovieInfo/MovieInfo';
import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

const MoviesDetails = () => {
  // const location = useLocation();
  // location.state.from.pathname = '/';

  return (
    <>
      <MovieInfo />
      <ul className="movieInfoLink">
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MoviesDetails;
