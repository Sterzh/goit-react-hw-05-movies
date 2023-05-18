import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

const BASE_URL = 'https://api.themoviedb.org/3/';
const MY_API_KEY = '?api_key=c511c78146d5adcdbcb48d13d0273853';
const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w200/';

const Cast = () => {
  const [cast, setCast] = useState('');
  const params = useParams().moviesId;

  useEffect(() => {
    if (cast === '') {
      response();
      async function response() {
        try {
          const response = await axios.get(
            `${BASE_URL}${`movie/${params}/credits`}${MY_API_KEY}`
          );
          const cast = await response.data.cast.map(e => {
            return {
              id: e.id,
              name: e.name,
              profile_path: e.profile_path,
              character: e.character,
            };
          });
          setCast(cast);
        } catch (error) {
          console.log(error);
        }
      }
    }
  }, [cast, params]);

  return (
    <>
      {cast.length !== 0 ? (
        <ul className={css.cast}>
          {cast.map(e => {
            return (
              <li key={e.id} className={css.cardCast}>
                <img
                  src={IMAGES_BASE_URL + e.profile_path}
                  alt={e.name}
                  className={css.cardImg}
                />
                <p className={css.cardName}>{e.name}</p>
                <p
                  className={css.cardCharacter}
                >{`Character: ${e.character}`}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={css.cardCastError}>
          We don`t have any cast for this movie.
        </p>
      )}
    </>
  );
};

export default Cast;
