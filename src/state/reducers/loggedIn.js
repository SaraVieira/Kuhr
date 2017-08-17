const LoggedIn = (state = false, action) => {
  switch (action.type) {
    case "LOGGED_USER":
      return true;
    default:
      return state;
  }
};

export default LoggedIn;
