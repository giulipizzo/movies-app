import { useEffect, useState } from 'react'
import { MovieCard } from './MovieCard'
import Movies from './movies.json'
import './MoviesGrid.Module.css'
import { get } from "../utils/httpClient";


export function MoviesGrid (){
    const [movies, setMovies] = useState([]);

  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
    });
  }, []);

    return (
        <ul className='MoviesGrid'>
            {Movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </ul>
    )
}