import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import Contact from "./Contact";
import { useSelector } from "react-redux";

const ContactList = () => {
const users = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      <ul>
        {filteredUsers.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList
