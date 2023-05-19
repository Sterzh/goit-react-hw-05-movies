import { useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BASE_URL = 'https://api.themoviedb.org/3/';
const GET_VALUE = 'search/movie';
const MY_API_KEY = '?api_key=c511c78146d5adcdbcb48d13d0273853';

const Movies = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const [foundMovies, setFoundMovies] = useState('');
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    setSearch(query);
    if (search !== '') {
      response();
      async function response() {
        try {
          const response = await axios.get(
            `${BASE_URL}${GET_VALUE}${MY_API_KEY}&query=${search}`
          );

          const foundMovies = await response.data.results.map(e => {
            return {
              id: e.id,
              title: e.title,
            };
          });
          setFoundMovies(foundMovies);
        } catch (error) {
          console.log(error);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const updateQueryString = e => {
    if (e.target.value !== '') {
      return setSearchParams({ query: e.target.value });
    }
    setSearchParams({});
  };

  return (
    <div
      style={{
        paddingTop: 15,
        paddingBottom: 15,
      }}
    >
      <input type="text" value={query} onChange={updateQueryString} />
      <button onClick={() => setSearch(query)}>Search</button>
      {foundMovies !== '' && (
        <ul>
          {foundMovies.map(e => {
            return (
              <Link
                key={e.id}
                to={`${e.id}`}
                state={{ from: location }}
                className="moviesLink"
              >
                <li className="moviesList">{e.title}</li>
              </Link>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default Movies;
