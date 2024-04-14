import { createSlice } from "@reduxjs/toolkit";

const INITAL_STATE = {
  contacts: {
		items: []
	},
}

const contactslistSlice = createSlice({
  // Ім'я слайсу
  name: "contactslist",
  // Початковий стан редюсера слайсу
  initialState: INITAL_STATE,
  // Об'єкт редюсерів
  reducers: {
	  addContact(state, action) {
		state.contacts.items.push(action.payload);
	},
	  deleteContact(state, action) {
		state.contacts.items = state.contacts.items.filter((user) => user.id !== action.payload)
	},
  },
});
export const selectContacts = (state) => state.contactslist.contacts.items;

// Генератори екшенів
export const {addContact: addContact, deleteContact } = contactslistSlice.actions;

// Редюсер слайсу
export const contactslistReducer = contactslistSlice.reducer;

