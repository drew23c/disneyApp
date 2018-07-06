import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Ratings extends Component{
    constructor(){
        super()
        this.state={
            ratings: []
        }
    }

    componentDidMount(){
        axios.get('/ratings')
        .then(res =>{
            this.setState({
                ratings: res.data.data
            })
        })
    }

    render(){
        return(
            <div>
                <h1>All Ratings</h1>
                <ul className="ratings">{this.state.ratings.map(r =><Link to={'/movies/' + r.movie_id + '/ratings'}><li key={r.id}>{r.rating} {r.review_text}</li></Link>)}</ul>
            </div>
        )
    }
}
export default Ratings;