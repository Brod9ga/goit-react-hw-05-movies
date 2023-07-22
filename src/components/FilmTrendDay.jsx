import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const FilmTrendDay = () => {
  const [films, setFilms] = useState([]);
const location = useLocation()
  useEffect(() => {
    const getFilmsDay = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTRhZTY1NGUxNWI3MzUwNmU5YzljMDE0MjIxY2I0ZSIsInN1YiI6IjY0YjI4YmMxMzc4MDYyMDEzOTA2NmE2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2VXT6w5OD1oegeLpRwuf3Op6TvAlAKBrPtnrjgvZyWI',
        },
      };
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/trending/movie/day',
          options
        );
        const data = response.data.results;

        setFilms(data);
      } catch (error) {
        console.error(error);
      }
    };

    getFilmsDay();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {films.map((film, index) => {
          return (
            <Link state={{from:location}} className="filmItem" key={film.id} to={`/ditails/${film.id}`}>
              {film.title}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
