import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { myLogger } from "./middlewares/myLogger";
import rootReducer from "./rootReducers";

const store = createStore(rootReducer, applyMiddleware(myLogger, logger));

export default store;
