import React, { useEffect, useState } from 'react';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, deleteUser, setFilter } from './redux/contactslist/contactslistReducer';

const initialUsers = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

const App = () => {
  // const [users, setUsers] = useState(() => {
  //   const stringifiedUsers = localStorage.getItem("users");
  //   if (!stringifiedUsers) return initialUsers;

  //   const parsedUsers = JSON.parse(stringifiedUsers);
  //   return parsedUsers;
  // });
  
  // const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const users = useSelector(state => state.contactslist.users);
    const filter = useSelector(state => state.contactslist.filter);
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]); 

  const onChangeFilter = (event) => {
    // setFilter(event.target.value);

  dispatch(setFilter(event.target.value));
  };

  const addContact = (newContact) => {
  setUsers([...users, { ...newContact, id: nanoid() }]);

  dispatch(addUser(newContact));
 };
  const deleteContact = (id) => {
    // setUsers(users.filter(user => user.id !== id));
     dispatch(deleteUser(userId));
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div >
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <SearchBox onSearch={onChangeFilter} />
      {<ContactList contacts={filteredUsers} onDelete={deleteContact}/> }
    </div>
  );
};

export default App
