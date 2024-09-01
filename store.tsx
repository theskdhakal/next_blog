import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import userReducer from "./utils/userSlice";
//configuration for persisting the user state
const userPersistConfig = {
  key: "userInfo",
  storage,
  whitelist: ["user"],
};

//create a persisted user reducer using the userPersistConfig
const persistedUserReducer = persistReducer(userPersistConfig, userReducer);

//configure thr Redux store
const store = configureStore({
  reducer: {
    userInfo: persistedUserReducer,
  },
});

//create a persistor for the redux store
const persistor = persistStore(store);

//export the redux store and persistor
export { store, persistor };

//Define types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
