import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './ContactForm.module.css';
import { addContact } from 'redux/slices';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const handleSubmit = evt => {
    evt.preventDefault();
    const name = evt.target.name.value;
    const number = evt.target.number.value;
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    if (contacts.some(contact => contact.name === name)) {
      return toast.warn(`${name} is already in contacts`);
    } else {
      dispatch(addContact(newContact));
    }
    evt.target.reset();
    evt.target.name.focus();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          autoComplete="off"
          pattern="^[a-zA-Zа-яА-ЯЇїЄєІіҐґ'’ʼ]+(([' -][a-zA-Zа-яА-ЯЇїЄєІіҐґ'’ʼ ])?[a-zA-Zа-яА-ЯЇїЄєІіҐґ'’ʼ]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label className={css.label}>
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          autoComplete="off"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit" className={css.addBtn}>
        Add contact
      </button>
      <ToastContainer />
    </form>
  );
}
