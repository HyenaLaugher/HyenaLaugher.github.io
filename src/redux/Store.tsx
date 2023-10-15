import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import activeSelectionReducer from "./ActiveSelectionsSlice";
import unionReducer from "./UnionSlice";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  activeSelection: activeSelectionReducer,
  union: unionReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
