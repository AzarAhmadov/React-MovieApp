import React from 'react'
import { useContext } from 'react';
import { globalContext } from './context/Context';

function Card(movie) {

    let {img_path } = useContext(globalContext)

    return (
        <div className='card'>
            <div className="card-container">
                <div className="card-row">
                    <div className="card-content">
                        <div className="card-image">
                            <img src={img_path + movie.info.poster_path} alt="" />
                        </div>
                        <div className="card-bottom">
                            <div className="card-movie-name">
                                <span> {movie.info.title} </span>
                            </div>
                            <div className="card-rating">
                                <span>{movie.info.vote_average}</span>
                            </div>
                        </div>
                        <div className="overview">
                            <p>
                                {movie.info.overview}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card