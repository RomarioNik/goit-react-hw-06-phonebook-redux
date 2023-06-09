import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, InputContact, Button } from './ContactForm.styled';
import { addContact } from 'redux/actions';
import { getContacts } from 'redux/selectors';

const checkDuplicateName = (contacts, nameContact) => {
  return contacts.some(({ name }) => name === nameContact);
};

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChangeInputName = ({ target: { value } }) => {
    setName(value);
  };

  const handleChangeInputNumber = ({ target: { value } }) => {
    setNumber(value);
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    const isContactName = checkDuplicateName(contacts, name);

    if (isContactName) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, number }));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmitForm}>
      <InputContact
        type="text"
        name="name"
        value={name}
        onChange={handleChangeInputName}
        placeholder="Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <InputContact
        type="tel"
        name="number"
        value={number}
        onChange={handleChangeInputNumber}
        placeholder="Phone number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;
