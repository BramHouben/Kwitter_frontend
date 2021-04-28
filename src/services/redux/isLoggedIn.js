const initialState = false;

const isLoggedInReducer = (state = initialState, action) => {
  console.log("isLoggedInReducer");
  if (action.type === "LOGIN") {
    console.log(action.payload);
    state = action.payload;
    return state;
  }
  return state;
};

export default isLoggedInReducer;
