import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducers";

// create my own logger function

const myLogger = (state) => (next) => (action) => {
    console.log("Before: ", JSON.stringify(state.getState()));
    console.log("Action: ", JSON.stringify(action));
    const newState = [action].reduce(rootReducer, state.getState());
    console.log("New State: ", JSON.stringify(newState));

    return next(action);
};

const store = createStore(rootReducer, applyMiddleware(myLogger));

export default store;
