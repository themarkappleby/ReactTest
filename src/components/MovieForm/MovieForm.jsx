import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from './movieForm.css';
import {addMovie} from './actions';

function defaultState () {
  return {
    id: Date.now(),
    title: '',
    rating: '',
    runtime: '',
    poster: ''
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addMovie: movie => {
      dispatch(addMovie(movie));
    }
  };
};

class MovieForm extends Component {
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
    this.props.addMovie(this.state);
    this.setState(defaultState());
  }

  render() {
    return (
      <form className={styles.form} onSubmit={this.submit}>
        <div className={styles.field}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="ex: Zootopia"
            value={this.state.title}
            onChange={this.handleInputChange}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="rating">Rating</label>
          <input
            id="rating"
            type="text"
            placeholder="ex: 99"
            value={this.state.rating}
            onChange={this.handleInputChange}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="runtime">Runtime</label>
          <input
            id="runtime"
            type="text"
            placeholder="ex: 128"
            vaule={this.state.runtime}
            onChange={this.handleInputChange}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="poster">Poster URL</label>
          <input
            id="poster"
            type="url"
            placeholder="ex: http://resizing.flixster.com/K13ByJ8OwsKeKwYudS44gn9tFZs=/180x267/v1.bTsxMTMxODA2ODtwOzE2OTg4OzIwNDg7NDk5Ozc0MQ"
            value={this.state.poster}
            onChange={this.handleInputChange}
          />
        </div>

        <input
          className={styles.button}
          type="submit"
          value="Add Movie"
        />
      </form>
    );
  }
}

export default connect(null, mapDispatchToProps)(MovieForm);
