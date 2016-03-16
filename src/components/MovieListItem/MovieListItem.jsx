import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from './movieListItem.css';
import {selectMovie} from '../../redux/actions';

const mapDispatchToProps = dispatch => {
  return {
    onSelectMovie: movie => {
      dispatch(selectMovie(movie));
    }
  };
};

class MovieListItem extends Component {
  render() {
    const {id, title, rating, runtime, poster} = this.props.movie;
    return (
      <div className={styles.item} onClick={() => this.props.onSelectMovie(this.props.movie)}>
        <img className={styles.poster} src={poster} />
        <div className={styles.title}>{title}</div>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(MovieListItem);
