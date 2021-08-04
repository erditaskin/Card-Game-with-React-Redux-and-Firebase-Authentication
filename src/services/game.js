import axios from "axios";

const headers = {
  "Content-Type": "application/json",
};

const gameAPI = axios.create({
  baseURL: process.env.REACT_APP_DECK_API_URL,
  headers: headers,
});

const GameService = {
  shuffleDeck: async () => {
    return await gameAPI.get("/new/shuffle/");
  },
  fetchCards: async (deck_id, cardCount = 52) => {
    return await gameAPI.get(`/${deck_id}/draw/?count=${cardCount}`);
  },
};

export default GameService;
