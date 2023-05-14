import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';

const BASE_URL = 'https://api.themoviedb.org/3/';
const MY_API_KEY = '?api_key=c511c78146d5adcdbcb48d13d0273853';

export const Reviews = () => {
  const [reviews, setReviews] = useState('');
  const params = useParams().moviesId;

  useEffect(() => {
    if (reviews === '') {
      response();
      async function response() {
        try {
          const response = await axios.get(
            `${BASE_URL}${`movie/${params}/reviews`}${MY_API_KEY}`
          );
          const reviews = await response.data.results.map(e => {
            return {
              id: e.id,
              author: e.author,
              content: e.content,
            };
          });
          setReviews(reviews);
        } catch (error) {
          console.log(error);
        }
      }
    }
  }, [reviews, params]);

  return (
    <>
      {reviews.length !== 0 ? (
        <ul>
          {reviews.map(e => {
            return (
              <li key={e.id} className={css.cardReviews}>
                <p className={css.cardReviewsAuthor}>{`Author: ${e.author}`}</p>
                <p className={css.cardReviewsContent}>{e.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={css.cardReviewsError}>
          We don`t have any reviews for this movie.
        </p>
      )}
    </>
  );
};
