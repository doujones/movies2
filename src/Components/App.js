import React, { Component } from 'react';
import MoviesResults from './MoviesResults'
import css from '../index.css'
class App extends Component {
  render(){
  return (

  <div className="container">
  <div className="row text-center">
  <div className="jumbotron">
  <h1>Hello, world!</h1>
  <p>William's Movies</p>
</div>
</div>
    <div className="row">
      <MoviesResults/>
    </div>
</div>
  );
}
}
export default App;


// The Movie DB API