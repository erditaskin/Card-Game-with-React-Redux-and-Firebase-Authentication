import * as actions from "constants/actions";
import AuthService from "services/auth";

export const login = (email, password) => async (dispatch) => {
  dispatch({ type: actions.LOADING_STARTED });

  await AuthService.login(email, password)
    .then((response) => {
      dispatch({
        type: actions.AUTH_LOGIN,
        payload: response.user,
      });
    })
    .catch((error) => {
      dispatch({
        type: actions.ALERT_SET,
        payload: {
          show: true,
          severity: "error",
          message: error.message,
        },
      });
    });

  dispatch({ type: actions.LOADING_FINISHED });
};

export const register = (email, password) => async (dispatch) => {
  dispatch({ type: actions.LOADING_STARTED });

  await AuthService.register(email, password)
    .then((response) => {
      dispatch({
        type: actions.AUTH_REGISTER,
        payload: response.user,
      });
    })
    .catch((error) => {
      dispatch({
        type: actions.ALERT_SET,
        payload: {
          show: true,
          severity: "error",
          message: error.message,
        },
      });
    });

  dispatch({ type: actions.LOADING_FINISHED });
};

export const checkAuth = (user) => async (dispatch) => {
  dispatch({
    type: actions.AUTH_CHECK,
    payload: user !== undefined && user !== null ? user : null,
  });
};

export const logout = () => async (dispatch) => {
  dispatch({ type: actions.LOADING_STARTED });

  await AuthService.logout().then(() => {
    dispatch({
      type: actions.GAME_RESET,
    });
    dispatch({
      type: actions.AUTH_LOGOUT,
    });
  });

  dispatch({ type: actions.LOADING_FINISHED });
};
