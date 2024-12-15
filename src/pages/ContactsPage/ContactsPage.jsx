import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Мои контакты</h1>
      <Filter />
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <p>Ваш список контактов пуст.</p>
      )}
    </div>
  );
};

export default ContactsPage;
