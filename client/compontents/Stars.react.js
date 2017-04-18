import React from 'react';
import PropTypes from 'prop-types';
import Glyphicon from './Glyphicon.react';
import uuidV4Js from 'uuid-v4.js';

const Stars = ({number}) =>
  <span>
    {new Array(Number(number))
      .fill('')
        .map(
          () => <Glyphicon type="star" key={uuidV4Js()} />
        )
    }
  </span>;

Stars.propTypes = {
  number: PropTypes.string.isRequired,
};

export default Stars;
