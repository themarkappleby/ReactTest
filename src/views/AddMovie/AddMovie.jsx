import React from 'react';
import MovieForm from '../../components/MovieForm/MovieForm.jsx';
import styles from './addMovie.css';

const AddMovie = params => {
  return (
    <div className={styles.form}>
      <MovieForm />
    </div>
  );
};

export default AddMovie;
