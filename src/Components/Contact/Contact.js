import React from 'react';
import PropTypes from 'prop-types';
import {
  ContactBlock,
  ContactName,
  ContactNumber,
  ContactButtonDelete,
} from './Contact.styled';

const Contact = ({ name, number, onDeleteContact }) => {
  return (
    <ContactBlock>
      <ContactName>Name: {name}</ContactName>
      <ContactNumber>Number: {number}</ContactNumber>
      <ContactButtonDelete type="button" onClick={onDeleteContact}>
        Delete
      </ContactButtonDelete>
    </ContactBlock>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
