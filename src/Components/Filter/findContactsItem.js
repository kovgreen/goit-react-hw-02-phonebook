const findContactsItem = (contacts, contact) =>
  contacts.find(item => item.name === contact.name);

export default findContactsItem;
