import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage: storage,
//   whitelist: ["authReducers"], // which reducer want to store
};
const pReducer = persistReducer(persistConfig, rootReducer);

//   const middleware = applyMiddleware(thunk, logger)
//   const store = createStore(pReducer, middleware)
//   const persistor = persistStore(store)

export default () => {
  let store = createStore(pReducer, applyMiddleware(thunk));
  let persistor = persistStore(store);

  return {
    store,
    persistor,
  };
};
