import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
import NoImageAVailable from '../images/No_Image_Available.jpg';

const BASE_URL = 'https://api.themoviedb.org/3/';
const MY_API_KEY = '?api_key=c511c78146d5adcdbcb48d13d0273853';
const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w300';

const MoviesDetails = () => {
  const location = useLocation();
  const [movieInfo, setMovieInfo] = useState('');
  const backLinkLocation = useRef(location.state?.from);
  const params = useParams().moviesId;
  const [moviesDetailsError, setMoviesDetailsError] = useState('');

  useEffect(() => {
    if (movieInfo === '') {
      response();
      async function response() {
        try {
          const response = await axios.get(
            `${BASE_URL}${`movie/${params}`}${MY_API_KEY}`
          );
          const movieInfo = {
            id: response.data.id,
            original_title: response.data.original_title,
            genres: response.data.genres
              .map(e => {
                return e.name;
              })
              .join(' '),
            overview: response.data.overview,
            release_date: response.data.release_date,
            poster_path: response.data.poster_path,
            vote_average: (response.data.vote_average * 10).toFixed(2),
          };
          setMovieInfo(movieInfo);
        } catch (error) {
          console.log(error);
          setMoviesDetailsError(error.message);
        }
      }
    }
  }, [location, movieInfo, params]);

  return (
    <>
      {movieInfo === '' ? (
        <>
          <div className="trendingMoviesError">
            Request error. Change the request or go to the main page
          </div>
        </>
      ) : (
        <>
          <div className="movieInfo">
            <Link to={backLinkLocation.current ?? '/'} className="backLink">
              <BsArrowLeftShort /> Go back
            </Link>
            <div className="movieInfoCard">
              <img
                src={
                  movieInfo.poster_path !== null
                    ? IMAGES_BASE_URL + movieInfo.poster_path
                    : NoImageAVailable
                }
                alt={movieInfo.original_title}
                width={300}
              />
              <div className="movieInfoText">
                <h2>
                  {movieInfo.original_title} (
                  {movieInfo.release_date !== ''
                    ? movieInfo.release_date
                    : 'no release_date data'}
                  )
                </h2>
                {movieInfo.vote_average !== 0 ? (
                  <p>User Score: {movieInfo.vote_average}%</p>
                ) : (
                  <p>User Score: no User Score data</p>
                )}
                <h3>Owerview</h3>
                <p>
                  {movieInfo.overview !== ''
                    ? movieInfo.overview
                    : 'No overview data'}
                </p>
                <h3>Genres</h3>
                <p>
                  {movieInfo.genres !== '' ? movieInfo.genres : 'No genre data'}
                </p>
              </div>
            </div>
          </div>
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
      )}
    </>
  );
};

export default MoviesDetails;
