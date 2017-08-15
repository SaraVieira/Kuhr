const cards = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT_CARD":
      return state + 1;
    case "DECREMENT_CARD":
      return state - 1;
    case "RESET_CARD":
      return 0;
    default:
      return state;
  }
};

export default cards;
