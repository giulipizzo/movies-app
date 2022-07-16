import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { get } from '../utils/httpClient'
import { Spinner } from '../components/Spinner'
import './MovieDetails.Module.css'


export function MovieDetails () {
    const {movieId} = useParams ();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        get('/movie/' + movieId).then((data) => {
            setIsLoading(false);
            setMovie(data);
        }) 
    }, [movieId] )

    if(isLoading){
        return <Spinner />
    }


    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    return (
    <div className='detailsContainer'>
    <img className='col + movieimg' src={imageUrl} alt={movie.title} />
    <div className='col + movieDetails'>
        <p className='firstItem'> 
            <strong>Title:</strong>  {movie.title}
        </p>
        <p> 
            <strong>Description:</strong>  {movie.overview}
        </p>
        <p>
            <strong>Genres:</strong> {' '}
            {movie.genres.map(genre => genre.name).join(', ')}
        </p>
    </div>
    </div>
    );
}