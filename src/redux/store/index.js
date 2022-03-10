import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { contactsReducer } from "../reducers/contactReducer";

export const store = createStore(
  contactsReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

//subscribe
store.subscribe(() => console.log(store.getState()));
