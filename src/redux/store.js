import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import homeReducer from "./reducer/home";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  home: homeReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
