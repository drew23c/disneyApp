import React from 'react';
import {Link} from 'react-router-dom';

const MovieList = ({movies, click}) =>{
    return(
        <div>
            <h1>All Disney Movies</h1>
            <ul onClick={click}>
                {movies.map(movie=> <li key={movie.id}><Link
                    to={"/movies/" + movie.id + "/ratings"}>
                        {movie.title}</Link></li>)}
            </ul>
        </div>
    )
}
export default MovieList;