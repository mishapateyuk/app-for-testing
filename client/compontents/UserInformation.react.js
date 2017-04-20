import React from 'react';
import PropTypes from 'prop-types';

class UserInformation extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      firstName: false,
      lastName: false,
      email: false,
    };
    this.firstNameChange = this.firstNameChange.bind(this);
    this.lastNameChange = this.firstNameChange.bind(this);
    this.emailChange = this.firstNameChange.bind(this);
  };

  firstNameChange(e) {
    this.setState({
      firstName: e.target.value,
    });
  };

  lastNameChange(e) {
    this.setState({
      lastName: e.target.value,
    });
  };

  emailChange(e) {
    this.setState({
      email: e.target.value,
    });
  };

  render () {
    return (
      <div className="marketing">
        <div className="jumbotron">
          <h2>Registration form:</h2>
          <p className="input-group half-width">
            <span className="input-group-addon">First name </span>
            <input type="text" className="form-control" onInput={this.firstNameChange}/>
          </p>
          <p className="input-group half-width">
            <span className="input-group-addon">Last name </span>
            <input type="text" className="form-control" onInput={this.firstNameChange}/>
          </p>
          <p className="input-group half-width">
            <span className="input-group-addon">Email </span>
            <input type="text" className="form-control" onInput={this.firstNameChange}/>
          </p>
          <p>
            <button className="btn btn-lg btn-success" role="button">
              Done
            </button>
          </p>
        </div>
      </div>
    );
  };
};

export default UserInformation;
