import { fetchFilmDetails } from 'components/fetches';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


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
        <img src='https://www.tgv.com.my/assets/images/404/movie-poster.jpg' alt="" height={'180px'}/>
        <h2>{filmDetails.title}</h2>
        <p>User Score {filmDetails.vote_average.toFixed(1)*10}%</p>
        <h3>Overview:</h3>
        <p>{filmDetails.overview}</p>
        <h3>Genres:</h3>
        <p>{filmDetails.genres.map(genre=>genre.name).join(', ')}</p>
      </div>
    )
  );
};
