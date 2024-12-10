
import s from './Contact.module.css';
import UserIcon from './UserIcon';
import PhoneIcon from './PhoneIcon';

const Contact = ({ id, name, number, onDeleteContact }) => (
  <li className={s.Contact}>
    <div className={s.info}>
      <UserIcon />
      <p>{name}</p>
    </div>
    <div className={s.info}>
      <PhoneIcon />
      <p>{number}</p>
    </div>
    <button onClick={() => onDeleteContact(id)}>Delete</button>
  </li>
);

export default Contact;
