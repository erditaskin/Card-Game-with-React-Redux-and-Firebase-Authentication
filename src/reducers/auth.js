import * as actions from "constants/actions";

const INITIAL_STATE = {
  user: null,
  isAuthenticated: false,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.AUTH_REGISTER:
      return {
        ...state,
        user: {
          uid: action.payload.uid,
          email: action.payload.email,
        },
        isAuthenticated: true,
      };
    case actions.AUTH_LOGIN:
      return {
        ...state,
        user: {
          uid: action.payload.uid,
          email: action.payload.email,
        },
        isAuthenticated: true,
      };
    case actions.AUTH_CHECK:
      return {
        ...state,
        user:
          action.payload !== undefined && action.payload !== null
            ? {
                uid: action.payload.uid,
                email: action.payload.email,
              }
            : null,
        isAuthenticated:
          action.payload !== undefined && action.payload !== null
            ? true
            : false,
      };
    case actions.AUTH_LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default authReducer;
