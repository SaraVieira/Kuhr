import { Lokka } from "lokka";
import { Transport } from "lokka-transport-http";
import { store } from "../../index";

const headers = {
  Authorization: `Bearer ${localStorage.getItem("kuhrToken") || ""}`
};

const client = new Lokka({
  transport: new Transport(
    "https://api.graph.cool/simple/v1/cj6dky73136ee0121fpxxelzu",
    { headers }
  )
});
function register(name, email, password) {
  return client
    .mutate(
      `
    {
      createUser(
        name: "${name}",
        authProvider: {
        	email: {
            email: "${email}",
            password: "${password}"
          }}) {
        id
        password
        email
      }
    }
  `
    )
    .then(result => login(result.createUser.email, password));
}

function login(email, password) {
  return client
    .mutate(
      `
    {
      signinUser(
        	email: {
            email: "${email}",
            password: "${password}"
          }) {
        user {
          id,
          name,
          email
        },
        token
      }
    }
    
  `
    )
    .then(result => {
      localStorage.setItem("kuhrToken", result.signinUser.token);
      store.dispatch({ type: "REGISTERED_USER", payload: result.signinUser });
    });
}

const user = (state = {}, action) => {
  switch (action.type) {
    case "REGISTER_USER":
      register(
        action.payload.name,
        action.payload.email,
        action.payload.password
      );
      return {
        ...state,
        registered: false,
        loading: true
      };
    case "REGISTERED_USER":
      return {
        ...state,
        registered: true,
        loading: false,
        user: { ...action.payload }
      };
    case "RESET_COUNT":
      return 0;
    default:
      return state;
  }
};

export default user;
