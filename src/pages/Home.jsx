import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
// import Fetch from 'components/Fetch';

const BASE_URL = 'https://api.themoviedb.org/3/';
const GET_VALUE = 'trending/movie/day';
const MY_API_KEY = '?api_key=c511c78146d5adcdbcb48d13d0273853';

const Home = () => {
  const location = useLocation();
  const [trendingMovies, setTrendingMovies] = useState('');

  useEffect(() => {
    if (trendingMovies === '') {
      return async function response() {
        try {
          const response = await axios.get(
            `${BASE_URL}${GET_VALUE}${MY_API_KEY}`
          );
          const trending = await response.data.results.map(e => {
            return {
              id: e.id,
              title: e.title,
            };
          });
          setTrendingMovies(trending);
        } catch (error) {
          console.log(error);
        }
      };
    }
  }, [trendingMovies]);

  return (
    <div
      style={{
        paddingTop: 15,
        paddingBottom: 15,
      }}
    >
      <h2>Trending Today</h2>
      <ul>
        {trendingMovies !== '' &&
          trendingMovies.map(e => {
            return (
              <Link key={e.id} to={`movies/${e.id}`} state={{ from: location }}>
                <li>{e.title}</li>
              </Link>
            );
          })}
      </ul>
    </div>
  );
};

export default Home;
