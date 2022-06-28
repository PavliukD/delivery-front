import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const reducer = combineReducers({

})

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user"],
  };

const persistedReducer = persistReducer(persistConfig, reducer);


const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
const persistor = persistStore(store);

export { store, persistor };