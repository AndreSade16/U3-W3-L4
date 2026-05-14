import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userPreferencesReducer from "../reducers/userPreferencesReducer";
import dataReducer from "../reducers/dataReducer";

const store = configureStore({
  reducer: combineReducers({
    userPreferences: userPreferencesReducer,
    data: dataReducer,
  }),
});

export default store;
