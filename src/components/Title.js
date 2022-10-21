import React from 'react';
import propTypes from 'prop-types';

function Title({ headline }) {
  return (
    <h2>{headline}</h2>
  );
}

Title.propTypes = {
  headline: propTypes.string.isRequired,
};

export default Title;
