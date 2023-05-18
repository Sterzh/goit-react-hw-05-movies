import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import css from './MovieInfo.module.css';

const BASE_URL = 'https://api.themoviedb.org/3/';
const MY_API_KEY = '?api_key=c511c78146d5adcdbcb48d13d0273853';
const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w300';

const MovieInfo = () => {
  const location = useLocation();
  const [movieInfo, setMovieInfo] = useState('');
  const backLinkLocation = useRef(location.state?.from);
  const params = useParams().moviesId;

  useEffect(() => {
    if (movieInfo === '') {
      response();
      async function response() {
        try {
          const response = await axios.get(
            `${BASE_URL}${`movie/${params}`}${MY_API_KEY}`
          );
          const movieInfo = await {
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
            vote_average: response.data.vote_average * 10,
          };
          setMovieInfo(movieInfo);
        } catch (error) {
          console.log(error);
        }
      }
    }
  }, [location, movieInfo, params]);

  return (
    <>
      <div className={css.movieInfo}>
        <Link to={backLinkLocation.current} className={css.backLink}>
          <BsArrowLeftShort /> Go back
        </Link>
        <div className={css.movieInfoCard}>
          <img
            src={IMAGES_BASE_URL + movieInfo.poster_path}
            alt={movieInfo.original_title}
          />
          <div className={css.movieInfoText}>
            <h2>
              {movieInfo.original_title} ({movieInfo.release_date})
            </h2>
            <p>User Score: {movieInfo.vote_average}%</p>
            <h3>Owerview</h3>
            <p>{movieInfo.overview}</p>
            <h3>Genres</h3>
            <p>{movieInfo.genres}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
