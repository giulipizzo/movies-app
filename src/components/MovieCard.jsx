import './MovieCard.Module.css'
import { Link } from 'react-router-dom';

export function MovieCard ({movie}){
    const imageUrl = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;
    return (
         <li className='MovieCard'>
            <Link to={'/movies/' + movie.id}>
            
           <img width={230}
            height={345}
            className='movieimg' 
            src={imageUrl} 
            alt={movie.title}/>
           <div>{movie.title}</div>
           </Link>
        </li>
    )
}