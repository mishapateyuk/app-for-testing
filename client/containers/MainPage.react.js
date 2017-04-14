import React from 'react';

class MainPage extends React.PureComponent {
  render() {
    return (
      <div>
        <p>
          <button type="button" className="btn btn-default">Default</button>
          <button type="button" className="btn btn-primary">Primary</button>
          <button type="button" className="btn btn-primary btn-lg">Large button</button>
          <button type="button" className="btn btn-success">Success</button>
        </p>
        Main Page!
      </div>
    );
  };
};

export default MainPage;
