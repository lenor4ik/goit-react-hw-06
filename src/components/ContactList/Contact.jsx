import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "../ContactList/Contact.module.css"
import phone from "../ContactList/PNG/phone.png"
import user from "../ContactList/PNG/user.png"

const Contact = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();
  const handleDelete = () => {
  dispatch(deleteContact(id));
  };

  return (
    <div>
      <li className={css.cartUser}>
        <div>
          <p><img className={css.icon} src={user} alt="user icon" /> {name}</p>
          <p><img className={css.icon} src={phone} alt="phone icon" /> {number}</p>
        </div>
     <div className={css.contBtn}><button className={css.delBtn} onClick={handleDelete}>Delete</button></div>
      </li>
    </div>
  );
};

export default Contact
