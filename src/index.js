import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "preact-redux";
import "./style";
import App from "./components/app";
import user from "./state/reducers/users";
import payments from "./state/reducers/payments";
import cards from "./state/reducers/cards";
import loggedIn from "./state/reducers/loggedIn";

const reducers = combineReducers({
  user,
  payments,
  cards,
  loggedIn
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

export const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(thunk))
);

export default () =>
  <Provider store={store}>
    <App />
  </Provider>;
