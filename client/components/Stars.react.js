import React from 'react';
import PropTypes from 'prop-types';
import Glyphicon from './Glyphicon.react';
import uuidV4Js from 'uuid-v4.js';

const Stars = ({number}) =>
  <span>
    {new Array(5)
      .fill('')
        .map(
          (item, i) => i < number ?
            <Glyphicon type="star" key={uuidV4Js()} /> :
            <Glyphicon type="star-empty" key={uuidV4Js()} />
        )
    }
  </span>;

Stars.propTypes = {
  number: PropTypes.string.isRequired,
};

export default Stars;
