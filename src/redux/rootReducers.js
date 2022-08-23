import { combineReducers } from "redux";
import counterReducer from "./Counter/counterReducer";
import dynamicCounterReducer from "./DynamicCounter/counterReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    dCounter: dynamicCounterReducer,
});

export default rootReducer;
