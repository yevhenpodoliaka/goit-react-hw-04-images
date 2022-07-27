import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, Form, Btn, Input } from './Searchbar.styled';
import { FiSearch } from 'react-icons/fi';

export default class Searchbar extends Component {
  state = {
    value: '',
  };
  handleChange = e => {
    this.setState({ value: e.target.value });
  };
  handleSabmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };
  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSabmit}>
          <Btn type="submit">
            <FiSearch />
          </Btn>

          <Input
            onChange={this.handleChange}
            value={this.state.value}
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Header>
    );
  }
}
Searchbar.propType = {
  onSubmit: PropTypes.func.isRequired,
};
