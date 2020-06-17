import React from 'react';
import PropTypes from 'prop-types';
import Contact from '../Contact/Contact';
import { List, Item } from './ContactList.styled';

const ContactList = ({ items, onDeleteContact }) =>
  items.length > 0 && (
    <List>
      {items.map(item => (
        <Item key={item.id}>
          <Contact {...item} onDeleteContact={() => onDeleteContact(item.id)} />
        </Item>
      ))}
    </List>
  );

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
