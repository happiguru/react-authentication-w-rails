// reducers.js
const initialState = {
  user: null,
  isLoggedIn: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_USER':
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
      };
    case 'LOGIN_USER':
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
      };
    case 'LOGOUT_USER':
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default userReducer;
