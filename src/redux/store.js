import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {contactslistReducer} from "./contactsSlice.js";
import {filterReducer} from "./filtersSlice.js";

const contactsPersistConfig = {
  key: "contacts",
  storage,
  whitelist: ["contacts"] // Список полів, які потрібно зберегти (в даному випадку, лише поле items)
};

export const store = configureStore({
    reducer: {
    contactslist: persistReducer(contactsPersistConfig, contactslistReducer),
    contactsfilter: filterReducer
    },
     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store)
