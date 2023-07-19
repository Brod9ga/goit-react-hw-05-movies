import { fetchCast } from 'components/fetches'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Cast = () => {
const {filmId}=useParams()
const [filmCast, setFilmCast]=useState([])

useEffect(() => {
    const getCast = async () => {
      try {
        const response = await fetchCast(filmId);
        setFilmCast(response.data.cast);
    } catch (error) {
        console.error(error);
    }
};

getCast();
}, [filmId]);
// const image = cast.profile_path
//     ? `https://image.tmdb.org/t/p/original${cast.profile_path}`
//     : 'https://www.tgv.com.my/assets/images/404/movie-poster.jpg';

  return (
    <div>
        <ul>
            {filmCast.map((cast, index)=>
            <li key={index}>
           
<img  src={cast.profile_path
    ? `https://image.tmdb.org/t/p/original${cast.profile_path}`
    : 'https://www.tgv.com.my/assets/images/404/movie-poster.jpg'} alt="" height={'120px'}/>
<p>{cast.name}</p>
<p>Character {cast.character}</p>
            </li>)}
        </ul>
    </div>
  )
}
