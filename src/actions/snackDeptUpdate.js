const snackUpdate = (operator, index) => {
  return {
    type: "UPDATE_SNACKS",
    payload: { operator, index },
  };
};

export default snackUpdate;
