import  { useState} from 'react';
import PropTypes from 'prop-types';
import { Header, Form, Btn, Input } from './Searchbar.styled';
import { FiSearch } from 'react-icons/fi';

export default function Searchbar( {onSubmit}) {
  const[value,setValue]=useState('')

  const handleChange = e => {
    setValue( e.target.value );
  };
  const handleSabmit = e => {
    e.preventDefault();
   onSubmit(value);
    setValue( '' );
  };

    return (
      <Header>
        <Form onSubmit={handleSabmit}>
          <Btn type="submit">
            <FiSearch />
          </Btn>

          <Input
            onChange={handleChange}
            value={value}
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Header>
    );
  }

Searchbar.propType = {
  onSubmit: PropTypes.func.isRequired,
};
