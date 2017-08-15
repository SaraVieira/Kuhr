const payments = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT_PAY":
      return state + 1;
    case "DECREMENT_PAY":
      return state - 1;
    case "RESET_PAY":
      return 0;
    default:
      return state;
  }
};

export default payments;
