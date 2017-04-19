import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const TestPreviewHeader = ({name, description}) =>
  <div className="jumbotron">
    <h1>{name}</h1>
    <p className="lead">
      {description}
    </p>
    <p>
      <Link className="btn btn-lg btn-success" to="/" role="button">
        Start testing!
      </Link>
    </p>
  </div>;

TestPreviewHeader.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default TestPreviewHeader;
