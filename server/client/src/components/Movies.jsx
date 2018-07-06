import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import axios from 'axios';
import Movie from './Movie';
import MovieList from './MovieList';

class Movies extends Component{
    constructor(){
        super()
        this.state={
            movies:[],
            rateId:'',
            rating:'',
            review:'',
            movieId:'',
            id:''
        }
    }

    renderMovieList = () =>{
        let {movies} = this.state;
        return(
            <MovieList
                movies={movies}
                click={this.handleClick}
            />
        )
    }

    renderMovie = () =>{
        let {rateId, rating, review, movieId, movies} = this.state;
        return(
            <Movie
                rateId={rateId}
                rating={rating}
                review={review}
                movieId={movieId}
                movies={movies}
            />
        )
    }
    componentDidMount(){
        axios.get('/movies')
        .then(res=>{
            this.setState({
                movies:res.data.data
            })
        })
    }
    handleClick = () =>{
        let id = this.props.match.params.id
        console.log(this)
        axios.get('/movies/' + id + '/ratings')
        .then(res =>{
            console.log(res)
            this.setState({
                rateId: res.data.id,
                rating: res.data.rating,
                review: res.data.review_text,
                movieId: res.data.movie_id
            })
        })
    }
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path="/movies" render={this.renderMovieList} />
                    <Route path="/movies/:id/ratings" render={this.renderMovie} />
                </Switch>
            </div>
        )
    }
}
export default Movies;