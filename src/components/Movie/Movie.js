import React, { Component } from 'react';
import classes from './Movie.css';

class Movie extends Component {
    state = {
        liked:false
    }

    likeHandler = ()=>{
        this.setState({liked:!this.state.liked})
    }

    render(){
        let likeState = 'far fa-heart '
        if(this.state.liked)
            likeState = 'fas fa-heart '
        return (
        <tr className="align-top">
            <td>{this.props.title}</td>
            <td>{this.props.genre}</td>
            <td>{this.props.stock}</td>
            <td>{this.props.rate}</td>
            <td><i className={likeState + classes.like} onClick={this.likeHandler}></i></td>
            <td>
                <button className="delete btn btn-danger" onClick={()=>this.props.delete(this.props.id)}>Delete</button>
            </td>
        </tr>
        );
    }
}

export default Movie;