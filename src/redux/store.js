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


const contactsPersistConfig = {
  key: "contacts",
  storage,
  whitelist: ["users"] // Список полів, які потрібно зберегти (в даному випадку, лише поле items)
};

export const store = configureStore({
    reducer: {
        contactslist: persistReducer(contactslistReducer, contactsPersistConfig)
    },
     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store)