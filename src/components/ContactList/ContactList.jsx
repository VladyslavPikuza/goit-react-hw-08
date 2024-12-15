import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact';  
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations'; 
import s from  './ContactList.module.css';


const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));  
  };

  if (!contacts) {
    return <p>Loading...</p>;
  }

  if (contacts.length === 0) {
    return <p>No contacts available</p>;
  }

  return (
    <ul className={s.ContactList}>
      {contacts.map((contact) => (
        <Contact 
          key={contact.id} 
          id={contact.id} 
          name={contact.name} 
          number={contact.number} 
          onDeleteContact={handleDeleteContact} 
        />
      ))}
    </ul>
  );
};

export default ContactList;


