import * as actions from "constants/actions";

const INITIAL_STATE = {
  deck: {},
  score: {
    user: null,
    computer: null,
  },
  round: null,
  cards: [],
  drawnCards: [],
  lastCards: {
    user: null,
    computer: null,
  },
  loading: true,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.GAME_RESET:
      return INITIAL_STATE;
    case actions.GAME_LOADING_SET:
      return {
        ...state,
        loading: true,
      };
    case actions.GAME_LOADING_CLEAR:
      return {
        ...state,
        loading: false,
      };
    case actions.GAME_NEW:
      return {
        ...state,
        deck: action.payload.deck,
        score: {
          user: 0,
          computer: 0,
        },
        round: 0,
        cards: action.payload.cards,
        drawnCards: [],
        lastCards: {
          user: null,
          computer: null,
        },
      };
    case actions.GAME_DRAW:
      const usersLastCard = state.cards[state.cards.length - 2];
      const compsLastCard = state.cards[state.cards.length - 1];
      const cards = state.cards.slice(0, -2);
      state.drawnCards.push(usersLastCard, compsLastCard);

      const scoreSubs = {
        JACK: 11,
        QUEEN: 12,
        KING: 13,
        ACE: 14,
      };
      const usersVal = isNaN(parseInt(usersLastCard.value))
        ? scoreSubs[usersLastCard.value]
        : Number(usersLastCard.value);
      const compsVal = isNaN(parseInt(compsLastCard.value))
        ? scoreSubs[compsLastCard.value]
        : Number(compsLastCard.value);
      return {
        ...state,
        score: {
          user: usersVal > compsVal ? state.score.user + 1 : state.score.user,
          computer:
            usersVal < compsVal
              ? state.score.computer + 1
              : state.score.computer,
        },
        round: state.round < 26 ? state.round + 1 : state.round,
        cards: cards,
        drawnCards: state.drawnCards,
        lastCards: {
          user: usersLastCard,
          computer: compsLastCard,
        },
      };
    default:
      return state;
  }
};

export default authReducer;
