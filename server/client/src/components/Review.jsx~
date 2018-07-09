import React, {Component} from 'react';
import axios from 'axios'

class Review extends Component{
    constructor(){
        super()
        this.rating = [" ", '1', '2', '3', '4', '5']
        this.state={
            review_text:'',
            rating:''
        }
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.value)
    }
    handleInput = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.value)
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        let {rating, review_text} = this.state;
        axios.post('/movies/review', {rating: rating, review_text: review_text} )
        .then((res) =>{
            console.log(res)
            console.log(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }
    render(){
        return(
            <div>
                <form className='form' onSubmit={this.handleSubmit} encType="text/plain">
                <h2>Review this movie</h2>
                    <select name='rating' onChange={this.handleChange}>
                        {this.rating.map(r => <option value={r}>{r}</option>)}
                    </select>
                    <p><textarea name='review_text' onInput={this.handleInput} rows="4" col="50"></textarea></p>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}
export default Review;