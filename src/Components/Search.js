import React, { Component } from 'react';
import { Form, FormControl, FormGroup,  Button } from 'react-bootstrap'
import { API_KEY } from '../Secrets'
import { movies } from '../Actions'
import { connect } from 'react-redux'

class Search extends Component {
  constructor(props){
    super(props);

    this.state ={
      query: ''
    };
    
  }
  search(){
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${this.state.query}`
    console.log(url);
    fetch(url,{
      method: 'GET'
    }).then(response=> response.json())
    .then(jsonObj =>  {this.props.movies(jsonObj.results)});
  }
  render(){
    return (
     <div>
      <Form inline className="col-md-12 col-md-offset-4">
        <FormGroup>
        {''}
          <FormControl
          type="text"
          placeholder="Will's Movies"
          onChange={(event) =>this.setState({query: event.target.value})}
          />
          {''}
          <Button bsStyle="success text-center"
          onClick={() =>this.search()}>
          Submit</Button>
        </FormGroup>
      </Form>
     </div>
    )
  }
}

export default connect(null, { movies }) (Search);