import * as actions from "constants/actions";

const INITIAL_STATE = {
  loading: false,
  isBusy: false,
  alert: {
    show: false,
    severity: null,
    message: null,
  },
};

const generalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.LOADING_STARTED:
      return {
        ...state,
        loading: true,
      };
    case actions.LOADING_FINISHED:
      return {
        ...state,
        loading: false,
      };
    case actions.BUSY_SET:
      return {
        ...state,
        isBusy: true,
      };
    case actions.BUSY_UNSET:
      return {
        ...state,
        isBusy: false,
      };
    case actions.ALERT_SET:
      return {
        ...state,
        alert: {
          show: action.payload.show,
          severity: action.payload.severity,
          message: action.payload.message,
        },
      };
    case actions.ALERT_CLEAR:
      return {
        ...state,
        alert: {
          show: false,
          severity: null,
          message: null,
        },
      };
    default:
      return state;
  }
};

export default generalReducer;
