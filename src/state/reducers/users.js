import { store } from "../../index";
import { loginCall, registerCall } from "../../api/user";
import { route } from "preact-router";

const register = (name, email, password) =>
  registerCall(name, email, password).then(result =>
    loginAfterRegiter(result.createUser.email, password)
  );

const loginAfterRegiter = (email, password) =>
  loginCall(email, password).then(result => {
    localStorage.setItem("kuhrToken", result.signinUser.token);
    store.dispatch({ type: "REGISTERED_USER", payload: result.signinUser });
    store.dispatch({ type: "LOGGED_USER", payload: result.signinUser });
  });

const login = (email, password) =>
  loginCall(email, password).then(result => {
    localStorage.setItem("kuhrToken", result.signinUser.token);
    store.dispatch({ type: "LOGGED_USER", payload: result.signinUser });
    store.dispatch({ type: "USER", payload: result.signinUser });
    route("/dashboard");
  });

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
    case "LOGIN_USER":
      login(action.payload.email, action.payload.password);

    case "USER":
      return {
        ...state,
        user: { ...action.payload }
      };
    default:
      return state;
  }
};

export default user;
