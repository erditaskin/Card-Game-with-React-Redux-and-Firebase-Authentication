import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reduxThunk from "redux-thunk";
import generalReducer from "reducers/general";
import authReducer from "reducers/auth";
import gameReducer from "reducers/game";

const reducers = combineReducers({
  generalStore: generalReducer,
  authStore: authReducer,
  gameStore: gameReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authStore", "gameStore"],
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer, {}, applyMiddleware(reduxThunk));
const persistor = persistStore(store);

export default store;
export { persistor };
