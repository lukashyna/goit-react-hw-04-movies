import React from 'react';
import PropTypes from 'prop-types';

const ReviewsListItem = ({ item }) => (
  <div>
    <h3>Author: {item.author}</h3>
    <p> {item.content}</p>
  </div>
);
ReviewsListItem.propTypes = {
  item: PropTypes.objectOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default ReviewsListItem;
