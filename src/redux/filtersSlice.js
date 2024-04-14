import { createSlice } from "@reduxjs/toolkit";

const INITAL_STATE = {
  filters: {
		name: ""
	}
}

const filterSlice = createSlice({
  // Ім'я слайсу
  name: "contactsfilter",
  // Початковий стан редюсера слайсу
  initialState: INITAL_STATE,
  // Об'єкт редюсерів
  reducers: {
	  changeFilter(state, action) {
		state.filters.name = action.payload
	},
  },
});
export const selectNameFilter = (state) => state.contactsfilter.filters.name;

// Генератори екшенів
export const { changeFilter } = filterSlice.actions;

// Редюсер слайсу
export const filterReducer = filterSlice.reducer;

