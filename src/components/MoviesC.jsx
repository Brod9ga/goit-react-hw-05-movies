import React, {  useState } from 'react';
import { fetchMovieAtWord } from './fetches';
import { Link, useSearchParams } from 'react-router-dom';

export const MoviesC = () => {
  const [word, setWord] = useState('');
  const[movies, setMovies]=useState([])
  const[searchParams, setSearchParam]=useSearchParams()
  const searchTerm = searchParams.get('query')
  
  const onChange = (event) => {
    setWord(event.target.value);
  };
  
  const onSubmit = (word) => {
    const wordTrim = word.trim();
    if (wordTrim === '') {
      return alert('You did not specify data for the search, please try again!');
    }
    
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(word);
    setSearchParam({query: word})
    
    
    const fetchFilm = async () => {
      try {
        const response = await fetchMovieAtWord(searchTerm);
        setMovies(response.results);
        console.log(searchTerm)
        
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchFilm()
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={word}
          onChange={onChange}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map((movie) => {
          return (
            <Link className="filmItem" key={movie.id} to={`/ditails/${movie.id}`} >
              {movie.title}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
