import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "preact-redux";
import {
  ApolloProvider,
  createNetworkInterface,
  ApolloClient
} from "react-apollo";
import "./style";
import App from "./components/app";
import user from "./state/reducers/users";
import payments from "./state/reducers/payments";
import cards from "./state/reducers/cards";

const reducers = combineReducers({
  user,
  payments,
  cards
});

const networkInterface = createNetworkInterface({
  // https://api.graph.cool/simple/v1/cj6dky73136ee0121fpxxelzu looks similar to: `https://api.graph.cool/simple/v1/<PROJECT_ID>`
  uri: "https://api.graph.cool/simple/v1/cj6dky73136ee0121fpxxelzu"
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const client = new ApolloClient({ networkInterface });

export const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(thunk))
);

export default () =>
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>;
