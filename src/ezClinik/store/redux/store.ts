import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loggedUserReducer from "./user/userSlice";
import persistReducer from "redux-persist/es/persistReducer";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import sessionStorage from "redux-persist/es/storage/session";

const persistConfig = {
  key: "root",
  storage: sessionStorage,
};

const reducer = combineReducers({
  loggedUser: loggedUserReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
