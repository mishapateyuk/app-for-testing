import React from 'react';
import {Link} from 'react-router-dom';


const TestItem = (props) => (
  <div className="col-lg-4">
    <img width="140" height="140" />
    <h2></h2>
    <p></p>
    <p>
      <Link className="btn btn-default" href="#" role="button">View details &raquo;</Link></p>
  </div>
);

export default TestItem;
