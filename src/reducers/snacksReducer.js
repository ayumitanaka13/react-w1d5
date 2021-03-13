const snacksData = [
  { food: "Doritos", quantity: 10 },
  { food: "Jagabee", quantity: 5 },
  { food: "Haribo", quantity: 50 },
];

const snacksReducer = (state = snacksData, action) => {
  if (action.type === "UPDATE_SNACKS") {
    const newState = [...state];
    if (action.payload.operator === "+") {
      newState[action.payload.index].quantity++;
    } else if (action.payload.operator === "-") {
      newState[action.payload.index].quantity--;
    }
    return newState;
  }
  return state;
};

export default snacksReducer;
