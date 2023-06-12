import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import allReducers from "../reducers";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducers = persistReducer(persistConfig, allReducers);
const store = createStore(persistedReducers);
const persistor = persistStore(store);

export { store, persistor };
