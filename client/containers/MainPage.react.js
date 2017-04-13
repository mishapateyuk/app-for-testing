import React from 'react';

class MainPage extends React.PureComponent {
  render() {
    return (
      <div>
        Main Page!
        <button onClick={this.props.clickHandler}>
          Click Me
        </button>
      </div>
    );
  };
};

export default MainPage;
