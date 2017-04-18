import React from 'react';
import {Link} from 'react-router-dom';
import Glyphicon from './Glyphicon.react';
import Stars from './Stars.react';
import PropTypes from 'prop-types';

const TestItem = ({details}) => (
  <div className="col-lg-4">
    <img width="140" height="140" className="img-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="/>
    <h2>{details.name}</h2>
    <p>{details.description}</p>
    <p>
      <Glyphicon type="pencil" />
      {details.level}{<Stars number={details.stars} />}
    </p>
    <p>
      <Glyphicon type="time" />
      {details.time}
    </p>
    <Link className="btn btn-default" to={`/test/${details.id}`} role="button">
      See details &raquo;
    </Link>
  </div>
);

TestItem.propTypes = {
  details: PropTypes.object.isRequired,
};

export default TestItem;
