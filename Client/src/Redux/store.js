import {
	legacy_createStore,
	applyMiddleware,
	compose,
	combineReducers,
} from "redux";
import thunk from "redux-thunk";
import authreducer from "./Auth/reducer";
import appreducer from "./App/reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootreducer = combineReducers({
	Auth: authreducer,
	App: appreducer,
});

export const store = legacy_createStore(
	rootreducer,
	composeEnhancers(applyMiddleware(thunk))
);
