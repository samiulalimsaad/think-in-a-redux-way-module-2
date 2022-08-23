// create my own logger function

import rootReducer from "../rootReducers";

export const myLogger = (state) => (next) => (action) => {
    console.log("Before: ", JSON.stringify(state.getState()));
    console.log("Action: ", JSON.stringify(action));
    const newState = [action].reduce(rootReducer, state.getState());
    console.log("New State: ", JSON.stringify(newState));

    return next(action);
};
