import React, { Component } from 'react'
const urlComponent = "https://image.tmdb.org/t/p/w342";


class MovieItem extends Component {

  constructor(props){
    super(props);

    this.state = {
      favorited: false
    };
  }

  displayFav(){
    if(!this.state.favorited){
      return <span className="fa-heart-empty"
      onClick={() => this.setState({favorited: !this.state.favorited})}></span>
    } else {
      return <span className="fa-heart"
      onClick={() => this.setState({favorited: !this.state.favorited})}></span>
    }
  }

  render(){
    return(
      <div className="col-sm-12 col-sm-3">
      <div className="thumbnail">
      <img src={urlComponent+this.props.movie.poster_path} alt=""/>
      <div className="caption">
      <h3>{this.props.movie.title}</h3>
      <p>{this.props.movie.overview}</p>
      <p>Release Date - {this.props.movie.release_date}</p>
      <p>Ratings - <span className="badge badge-default"><span className="glyphicon glyphicon-star" aria-hidden="true">{this.props.movie.vote_average}</span></span></p>
      <p>{this.displayFav()}</p>
      </div>
      </div>
      </div>
    )
  }
}

export default MovieItem;