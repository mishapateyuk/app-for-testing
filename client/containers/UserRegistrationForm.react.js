import React from 'react';
import PropTypes from 'prop-types';
import {checkUserName} from '../services/checkAuthData';
import {connect} from 'react-redux';
import {setUserName} from '../constants/constants';

const mapDispatchToProps = dispatch => ({
  setUserName: userName => dispatch({
    type: setUserName,
    userName,
  }),
});

class UserInformation extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      firstName: false,
      lastName: false,
      isFirstNameValid: false,
      isLastNameValid: false,
    };
    this.firstNameChange = this.firstNameChange.bind(this);
    this.lastNameChange = this.lastNameChange.bind(this);
  };

  firstNameChange(e) {
    this.setState({
      firstName: e.target.value,
      isFirstNameValid: checkUserName(e.target.value),
    });
  };

  lastNameChange(e) {
    this.setState({
      lastName: e.target.value,
      isLastNameValid: checkUserName(e.target.value),
    });
  };

  isButtonDisabled() {
    return this.state.firstName && this.state.lastName;
  };

  render () {
    const firstNameErrorIndicator = !this.state.isFirstNameValid ? 'has-error' : '';
    const lastNameErrorIndicator = !this.state.isLastNameValid ? 'has-error' : '';
    return (
      <div className="marketing">
        <div className="jumbotron">
          <h2>Registration form:</h2>
          <p className={`input-group half-width ${firstNameErrorIndicator}`}>
            <span className="input-group-addon">First name </span>
            <input type="text" className="form-control" onInput={this.firstNameChange}/>
          </p>
          <p className={`input-group half-width ${lastNameErrorIndicator}`}>
            <span className="input-group-addon">Last name </span>
            <input type="text" className="form-control" onInput={this.lastNameChange}/>
          </p>
          <p>
            <button
              className="btn btn-lg btn-success"
              role="button"
              disabled={!this.isButtonDisabled()}
              onClick={() => this.props.setUserName(
                `${this.state.firstName} ${this.state.lastName}`
              )}
            >
              Done
            </button>
          </p>
        </div>
      </div>
    );
  };
};

UserInformation.PropTypes = {
  setUserName: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(UserInformation);
