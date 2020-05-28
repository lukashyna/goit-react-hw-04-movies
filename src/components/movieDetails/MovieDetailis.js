import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Cast from '../cast/CastList';
import Reviews from '../reviews/Reviews';

const Movie = ({ item, photo, onGoback }) => (
  <article>
    <div>
      <button type="button" onClick={onGoback}>
        Back to articles
      </button>
      <h2>
        {item.original_title} {item.original_name}
      </h2>
      <img src={photo} alt="" />
      <h3>Overview</h3>
      <p>{item.overview}</p>
    </div>
    <div>
      <p>Additional information</p>
      <Link to={`/movies/${item.id}/cast`}>Cast</Link> <br />
      <Link to={`/movies/${item.id}/reviews`}>Reviews</Link>
    </div>
    <div>
      <Route path="/movies/:movieId/cast" component={Cast} />
      <Route path="/movies/:movieId/reviews" component={Reviews} />
    </div>
  </article>
);
Movie.propTypes = {
  onGoback: PropTypes.func.isRequired,
  photo: PropTypes.string.isRequired,
  item: PropTypes.objectOf(
    PropTypes.shape({
      original_title: PropTypes.string,
      original_name: PropTypes.string,
      poster_path: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      genres: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default withRouter(Movie);
