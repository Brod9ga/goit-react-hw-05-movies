
import axios from 'axios';
export const fetchFilmDetails = async(filmId) => {
  if (!filmId) return;
  const id = filmId;

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
        `https://api.themoviedb.org/3/movie/${id}`,
        options
      );

      return response.data;
    } catch (error) {
      console.error(error);
    } finally {
    }
  };



export const fetchCast = async (filmId) => {
  if (!filmId) return;
  const id = filmId;

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
        `https://api.themoviedb.org/3/movie/${id}/credits`,
        options
      );

      console.log(response.data)
      return response;
    } catch (error) {
      console.error(error);
    } finally {
    }
}


export const fetchRevievs = async (filmId) => {
  if (!filmId) return;
  const id = filmId;

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
        `https://api.themoviedb.org/3/movie/${id}/reviews`,
        options
      );

      
      return response;
    } catch (error) {
      console.error(error);
    } finally {
    }
}

export const fetchMovieAtWord = async (word) => {

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/search/movie',
  params: {query: word},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTRhZTY1NGUxNWI3MzUwNmU5YzljMDE0MjIxY2I0ZSIsInN1YiI6IjY0YjI4YmMxMzc4MDYyMDEzOTA2NmE2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2VXT6w5OD1oegeLpRwuf3Op6TvAlAKBrPtnrjgvZyWI'
  }
};

const {data} = await axios.request(options)
  return data
}
