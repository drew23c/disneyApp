import React, { Component } from 'react';
import './App.css';
import {Switch, Link, Route} from 'react-router-dom';
import Movies from './components/Movies';
import Ratings from './components/Ratings';

const Home = () =>{
  return(
    <div>
      <h1>Welcome to DisneyApp</h1>
    </div>
  )
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to='/'>Home</Link>{" "}
          <Link to='/movies'>Movies</Link>{" "}
          <Link to='/ratings'>Ratings</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movies" component={Movies} />
          <Route path="/ratings" component={Ratings} />
        </Switch>
      </div>
    );
  }
}

export default App;
