import CSS from './index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { addContactAction } from '../../redux/contacts/contactsSlice';

const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const nameValue = e.target.elements.name.value;
    const numberValue = e.target.elements.number.value;

    const isExist = contacts.some(
      contact => contact.name.toLowerCase() === nameValue.toLowerCase()
    );
    if (isExist) {
      alert(`${nameValue} is already in contacts.`);
      return;
    }

    dispatch(addContactAction(nameValue, numberValue));

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={CSS.formContainer}>
        <label htmlFor="inputName" className={CSS.formLabel}>
          Name
        </label>
        <input
          name="name"
          type="text"
          className={CSS.input}
          id="inputName"
          required
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
        <label htmlFor="inputNumber" className={CSS.formLabel}>
          Number
        </label>
        <input
          name="number"
          type="tel"
          className={CSS.input}
          id="inputNumber"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          required
        />
        <button type="submit" className={CSS.btn}>
          Add contact
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
