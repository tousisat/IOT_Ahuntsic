import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import layoutReducer from "./reducers/layout";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  layout: layoutReducer
});

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};

export default configureStore;
