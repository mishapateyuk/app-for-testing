import React from 'react';
import PropTypes from 'prop-types';

const Glyphicon = ({type}) =>
  <span className={`glyphicon glyphicon-${type}`} aria-hidden="true" />;

Glyphicon.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Glyphicon;
