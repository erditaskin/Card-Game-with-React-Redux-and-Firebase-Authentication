import * as actions from "constants/actions";

export const setLoading = (payload) => async (dispatch) => {
  dispatch({
    type: payload ? actions.LOADING_STARTED : actions.LOADING_FINISHED,
    payload: payload,
  });
};

export const setIsBusy = (payload) => async (dispatch) => {
  dispatch({
    type: payload ? actions.BUSY_SET : actions.BUSY_UNSET,
    payload: payload,
  });
};

export const setAlert = (payload) => async (dispatch) => {
  dispatch({
    type: actions.ALERT_SET,
    payload: payload,
  });
};

export const clearAlert = () => async (dispatch) => {
  dispatch({
    type: actions.ALERT_CLEAR,
  });
};
