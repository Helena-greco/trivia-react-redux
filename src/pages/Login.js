import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fetchToken from '../services/FetchAPI';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      nameInput: '',
      emailInput: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.verifyLogin = this.verifyLogin.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  verifyLogin() {
    const { emailInput, nameInput } = this.state;
    const emailtest = /\S+@+\S+.+\S/;
    if (emailtest.test(emailInput) && nameInput) {
      return false;
    }
    return true;
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { getToken } = this.props;
    getToken(fetchToken());
  }

  render() {
    const { nameInput, emailInput } = this.state;
    return (
      <form>
        <label htmlFor="input-player-name">
          <input
            data-testid="input-player-name"
            type="text"
            name="nameInput"
            placeholder="Digite seu nome"
            onChange={ this.handleChange }
            value={ nameInput }
          />
        </label>
        <label htmlFor="input-gravatar-email">
          <input
            data-testid="input-gravatar-email"
            type="email"
            name="emailInput"
            placeholder="Digite seu email"
            onChange={ this.handleChange }
            value={ emailInput }
          />
        </label>
        <button
          type="button"
          data-testid="btn-play"
          disabled={ this.verifyLogin() }
          onClick={ this.handleClick }
        >
          Jogar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  getToken: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getToken: (token) => dispatch(fetchToken(token)),
});

export default (null, mapDispatchToProps)(Login);
