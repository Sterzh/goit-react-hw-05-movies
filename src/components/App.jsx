import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout/Layout';
import MovieInfo from './MovieInfo/MovieInfo';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

// import Home from '../pages/Home';
// import Movies from '../pages/Movies';
// import MoviesDetails from '../pages/MoviesDetails';
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MoviesDetails = lazy(() => import('../pages/MoviesDetails'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="movies/:moviesId" element={<MoviesDetails />}>
          <Route path="movieInfo" element={<MovieInfo />} />
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
