import React from 'react';
import PropTypes from 'prop-types';

const CastListItem = ({ item, photo }) => (
  <div>
    <img src={photo} alt="" />
    <p>{item.name}</p>
    <p> {item.character}</p>
  </div>
);
CastListItem.propTypes = {
  photo: PropTypes.string.isRequired,
  item: PropTypes.objectOf(
    PropTypes.shape({
      cast_id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default CastListItem;
