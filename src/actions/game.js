import * as actions from "constants/actions";
import GameService from "services/game";

export const setGame = () => async (dispatch) => {
  dispatch({ type: actions.LOADING_STARTED });
  await GameService.shuffleDeck()
    .then((deckResponse) => {
      GameService.fetchCards(deckResponse.data.deck_id)
        .then((cardResponse) => {
          dispatch({
            type: actions.GAME_NEW,
            payload: {
              deck: deckResponse.data,
              cards: cardResponse.data.cards,
            },
          });
          dispatch({
            type: actions.ALERT_CLEAR,
          });
        })
        .catch((error) => {
          dispatch({
            type: actions.ALERT_SET,
            payload: {
              show: true,
              severity: "error",
              message: "Game Service: " + error.message,
            },
          });
        });
    })
    .catch((error) => {
      dispatch({
        type: actions.ALERT_SET,
        payload: {
          show: true,
          severity: "error",
          message: "Game Service: " + error.message,
        },
      });
    });
  dispatch({ type: actions.LOADING_FINISHED });
};

export const setGameLoading = (status) => async (dispatch) => {
  dispatch({
    type: status ? actions.GAME_LOADING_SET : actions.GAME_LOADING_CLEAR,
  });
};

export const gameReset = () => async (dispatch) => {
  dispatch({
    type: actions.GAME_RESET,
  });
  dispatch({
    type: actions.GAME_LOADING_SET,
  });
};

export const drawCard = () => async (dispatch) => {
  dispatch({
    type: actions.GAME_DRAW,
  });
};
