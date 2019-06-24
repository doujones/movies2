import React, { Component } from 'react';
import Search from './Search';
import { connect } from 'react-redux';
import MovieItem from './MovieItem'

class MovieResults extends Component{
  render(){
    return(
      <div>
      <h1 className="text-center">Movie Results</h1>
      <Search />
      {this.props.movies.map(item => {
        return <MovieItem movie={item} key={item.id}/>;
      })}
      </div>
    )
  }
}
function mapStateToProps(state){
  console.log(state)
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps, null)(MovieResults);