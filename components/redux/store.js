import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import bookmarkReducer from "./reducers";

const rootReducer = combineReducers({bookmarkReducer});

export const Store = createStore(rootReducer,applyMiddleware(thunk));
