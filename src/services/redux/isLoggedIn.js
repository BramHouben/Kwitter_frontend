const initialState = false;

const isLoggedInReducer = (state = initialState, action) => {
  console.log("isLoggedInReducer");
  if (action.type === "LOGIN") {
    state = true;
    return state;
  }
  return state;
};

export default isLoggedInReducer;
