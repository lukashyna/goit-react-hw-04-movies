import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';

class SearchForm extends Component {
  state = { inputValue: '' };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    history: ReactRouterPropTypes.history.isRequired,
  };

  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { inputValue } = this.state;
    const { history } = this.props;
    this.props.onSubmit(this.state.inputValue);
    if (inputValue) {
      history.push(`/movies?q=${inputValue}`);
    }
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ inputValue: '' });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter search query
          <input type="text" value={inputValue} onChange={this.handleChange} />
        </label>
        <button type="submit">Search</button>
      </form>
    );
  }
}
export default withRouter(SearchForm);
