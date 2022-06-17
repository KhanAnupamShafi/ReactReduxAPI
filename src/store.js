import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import userReducer from "./service/reducer/userReducer";

// const rootReducer = combineReducers({ foo: userReducer });

const store = createStore(userReducer, applyMiddleware(thunk));

export default store;
