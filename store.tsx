import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import userReducer from "./utils/userSlice";

// Configuration for persisting the user state
const userPersistConfig = {
  key: "userInfo",
  storage,
  whitelist: ["user"],
};

// Create a persisted user reducer using the userPersistConfig
const persistedUserReducer = persistReducer(userPersistConfig, userReducer);

// Configure the Redux store
const store = configureStore({
  reducer: {
    userInfo: persistedUserReducer,
    // Add other reducers here if needed
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action paths
        ignoredActions: ["persist/PERSIST"],
        // Ignore these paths in the state
        ignoredPaths: ["register", "rehydrate"],
      },
    }),
});

// Create a persistor for the redux store
const persistor = persistStore(store);

// Export the redux store and persistor
export { store, persistor };

// Define types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
