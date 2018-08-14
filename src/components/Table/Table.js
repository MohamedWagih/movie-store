import React, { Component } from 'react';
import Movie from '../Movie/Movie';
import * as movieService from '../../services/fakeMovieService';
import classes from './Table.css'

class Table extends Component{
    
    state = {
        movies: movieService.getMovies(),
    }

    deleteMovieHandler = (id)=>{
        movieService.deleteMovie(id);
        this.setState({movies: movieService.getMovies()})
    }

    render () {
        return (
            <div className='table-responsive'>
                <table className="table table-light table-striped">
                    <thead className="">
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Rate</th>
                            <th scope="col">Like</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody className={"t-body " +classes.tBody}>
                        {this.state.movies.map(movie => 
                        <Movie 
                            key={movie._id}
                            id={movie._id}
                            title={movie.title}
                            genre={movie.genre.name}
                            stock={movie.numberInStock}
                            rate={movie.dailyRentalRate}
                            delete={this.deleteMovieHandler}/>
                        // return <p>{movie.title}</p>
                        )}
                    </tbody>
                </table>
            </div>
        ) ;
    }
}

export default Table;