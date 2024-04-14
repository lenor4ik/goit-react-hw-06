import { createSlice } from "@reduxjs/toolkit";

const INITAL_STATE = {
  contacts: {
		items: []
	},
  filters: {
		name: ""
	}
}

const contactslistSlice = createSlice({
  // Ім'я слайсу
  name: "contactslist",
  // Початковий стан редюсера слайсу
  initialState: INITAL_STATE,
  // Об'єкт редюсерів
  reducers: {
	  addUser(state, action) {
		state.contacts.push(action, payload);
	},
	  deleteUser(state, action) {
		state.contacts.filter((user) => user.id !== action.payload)
	},
	  setFilter(state, action) {
		state.filter = action.payload
	},
  },
});

// Генератори екшенів
export const {addUser, deleteUser, setFilter } = contactslistSlice.actions;

// Редюсер слайсу
export const contactslistReducer = contactslistSlice.reducer;


// export const contactslistReducer = (state = INITAL_STATE, action) => {
// 	switch (action.type) {
// 		case "contactslist/ADD_USER": {
// 			return {
// 				...state,
// 				contacts: {
// 					...state.contacts,
// 					items: [...state.contacts.items, action.payload]
// 				}
// 			}
// 		}
// 			case "contactslist/DELETE_USER": {
// 			return {
// 				...state,
// 				contacts: {
// 					...state.contacts,
// 					items: state.contacts.items.filter((user)=> user.id !== action.payload)
// 				}
// 			}
// 		}
// 			case "contactslist/SET_FILTER": {
// 			return {
// 				...state,
// 				contacts: {
// 					...state.contacts,
// 					filter: action.payload
// 				}
// 			}
// 		}
// 			default:
//             return state;
// 	}
	
// }