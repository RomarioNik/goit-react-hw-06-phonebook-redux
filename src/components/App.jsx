import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import {
  Container,
  PhoneBook,
  Wrapper,
  TitlePrime,
  TitleSecond,
} from './App.styled';

const App = () => {
  return (
    <Container>
      <PhoneBook>
        <Wrapper>
          <TitlePrime>Phonebook</TitlePrime>
          <ContactForm />
        </Wrapper>

        <Wrapper>
          <TitleSecond>Contacts</TitleSecond>
          <Filter />
        </Wrapper>
        <ContactList />
      </PhoneBook>
    </Container>
  );
};

export default App;
