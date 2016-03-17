import React from 'react';
import {reduxForm} from 'redux-form';
import styles from './movieForm.css';
import {addMovie} from './actions';

const submit = (movie, dispatch) => dispatch(addMovie(movie));

let MovieForm = props => {
  const {fields: {title, rating, runtime, poster}, handleSubmit} = props;
  return (
    <form className={styles.form} onSubmit={handleSubmit(submit)}>
      <div className={styles.field}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          placeholder="ex: Zootopia"
          {...title}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="rating">Rating</label>
        <input
          id="rating"
          type="text"
          placeholder="ex: 99"
          {...rating}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="runtime">Runtime</label>
        <input
          id="runtime"
          type="text"
          placeholder="ex: 128"
          {...runtime}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="poster">Poster URL</label>
        <input
          id="poster"
          type="url"
          placeholder="ex: http://resizing.flixster.com/K13ByJ8OwsKeKwYudS44gn9tFZs=/180x267/v1.bTsxMTMxODA2ODtwOzE2OTg4OzIwNDg7NDk5Ozc0MQ"
          {...poster}
        />
      </div>

      <input
        className={styles.button}
        type="submit"
        value="Add Movie"
      />
    </form>
  );
};

MovieForm = reduxForm({
  form: 'movie',
  fields: ['title', 'rating', 'runtime', 'poster']
})(MovieForm);

export default MovieForm;
