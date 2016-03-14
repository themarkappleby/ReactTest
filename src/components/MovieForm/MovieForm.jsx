import React, {Component} from 'react';
import styles from './movieForm.css';

function defaultState () {
  return {
    id: Date.now(),
    title: '',
    rating: '',
    runtime: '',
    poster: ''
  };
}

export default class MovieForm extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState();
    this.submit = this.submit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({[e.target.id]: e.target.value.trim()});
  }

  submit(e) {
    e.preventDefault();
    this.props.newMovie(this.state);
    this.setState(defaultState());
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <div className="field">
          <label htmlFor="title">Title</label>
          <input id="title" type="text" value={this.state.title} onChange={this.handleInputChange}/>
        </div>

        <div className="field">
          <label htmlFor="rating">Rating</label>
          <input id="rating" type="text" value={this.state.rating} onChange={this.handleInputChange}/>
        </div>

        <div className="field">
          <label htmlFor="runtime">Runtime</label>
          <input id="runtime" type="text" vaule={this.state.runtime} onChange={this.handleInputChange}/>
        </div>

        <div className="field">
          <label htmlFor="poster">Poster URL</label>
          <input id="poster" type="url" value={this.state.poster} onChange={this.handleInputChange}/>
        </div>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}
