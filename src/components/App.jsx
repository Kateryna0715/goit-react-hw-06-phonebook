import ContactForm from './ContactForm/ContactForm';
import Section from './Section/Section';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Notification from './Notification/Notification';
import { useSelector } from 'react-redux';
import { getContacts } from '../redux/selectors';

const App = () => {
  const contacts = useSelector(getContacts);
  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        {contacts.length > 0 ? (
          <>
            <Filter />
            <ContactList />
          </>
        ) : (
          <Notification message="There is no added contacts" />
        )}
      </Section>
    </>
  );
};

export default App;
