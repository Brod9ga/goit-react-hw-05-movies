import { fetchFilmDetails } from 'components/fetches';
import React, { useEffect, useState } from 'react';
import { useParams, Link, Routes, Route } from 'react-router-dom';
import { Cast } from './Cast';
import { Revievs } from './Revievs';

export const FilmDitails = () => {
  const { filmId } = useParams();
  const [filmDetails, setFilmDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetchFilmDetails(filmId);
        setFilmDetails(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDetails();
  }, [filmId]);

  return (
    filmDetails && (
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original${filmDetails.backdrop_path}`}
          alt=""
          height={'180px'}
        />
        <h2>{filmDetails.title}</h2>
        <p>User Score {filmDetails.vote_average.toFixed(1) * 10}%</p>
        <h3>Overview:</h3>
        <p>{filmDetails.overview}</p>
        <h3>Genres:</h3>
        <p>{filmDetails.genres.map(genre => genre.name).join(', ')}</p>

        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="revievs">Revievs</Link>
          </li>
        </ul>
        <ul>
          
        </ul>
        <Routes>
          <Route path='cast' element={<Cast/>}>cast</Route>
          <Route path='revievs' element={<Revievs/>}>revievs</Route>
        </Routes>
      </div>
    )
  );
};
