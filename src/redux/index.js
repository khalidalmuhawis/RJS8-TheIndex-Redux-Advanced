import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";

import { fetchAuthors, fetchBooks } from "./actions";
import reducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(fetchAuthors());
store.dispatch(fetchBooks());

export default store;