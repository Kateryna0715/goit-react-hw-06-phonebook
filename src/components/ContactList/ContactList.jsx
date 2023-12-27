import { useDispatch, useSelector } from 'react-redux';
import CSS from './index.module.css';
import Contact from 'components/Contact/Contact';
import { getContacts, getFilter } from '../../redux/selectors';
import { deleteContactAction } from '../../redux/contacts/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = id => {
    dispatch(deleteContactAction(id));
  };

  return (
    <ul className={CSS.list}>
      {filterContacts().map(({ id, name, number }) => (
        <Contact
          key={id}
          name={name}
          number={number}
          deleteContact={() => deleteContact(id)}
        />
      ))}
    </ul>
  );
};
export default ContactList;
