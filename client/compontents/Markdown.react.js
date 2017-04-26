import React from 'react';
import {markdown} from 'markdown';

const Markdown = ({html, className}) =>
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: markdown.toHTML(html)
    }}
  />;

export default Markdown;
