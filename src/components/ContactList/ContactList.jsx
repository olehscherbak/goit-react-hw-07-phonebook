import { useSelector } from 'react-redux';

import * as selectors from 'redux/selectors';
import ContactItem from 'components/ContactItem/ContactItem';

export default function ContactList() {
  const contacts = useSelector(selectors.getItems);
  const filter = useSelector(selectors.getFilter);
  const filteredContacts =
    contacts.length > 0
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : [];
  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
}
