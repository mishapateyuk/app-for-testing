import React from 'react';
import {markdown} from 'markdown';
import PropTypes from 'prop-types';

const Markdown = ({html, className}) =>
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: markdown.toHTML(html)
    }}
  />;

Markdown.propTypes = {
  html: PropTypes.string,
  className: PropTypes.string,
};

export default Markdown;
