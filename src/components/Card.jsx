import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  title, description, imagesrc, imagealt, tag1, tag2, tag3,
}) => (
  <div className="flex items-center justify-center m-4">
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={imagesrc} alt={imagealt} />
      <div className="px-6 py-4">
        <div className="font-bold text-lg mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #
          {tag1}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #
          {tag2}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #
          {tag3}
        </span>
      </div>
    </div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imagesrc: PropTypes.string.isRequired,
  imagealt: PropTypes.string.isRequired,
  tag1: PropTypes.string.isRequired,
  tag2: PropTypes.string.isRequired,
  tag3: PropTypes.string.isRequired,
};

export default Card;
