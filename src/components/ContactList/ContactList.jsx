import { useSelector } from 'react-redux';
import ContactItem from 'components/ContactItem';
import { List } from './ContactList.styled';
import { getContacts, getFilter } from 'redux/selectors';

const filterContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(({ name }) =>
    name.toLocaleLowerCase().includes(normalizedFilter)
  );
};

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const visibleContacts = filterContacts(contacts, filter);

  if (visibleContacts.length === 0) {
    return null;
  }

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
};

export default ContactList;
