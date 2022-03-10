import { createStore } from "redux";
import { contactsReducer } from "../reducers/contactReducer";

export const store = createStore(
  contactsReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//subscribe
store.subscribe(() => console.log(store.getState()));
