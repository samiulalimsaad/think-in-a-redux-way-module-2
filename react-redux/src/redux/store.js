import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { myLogger } from "./middlewares/myLogger";
import rootReducer from "./rootReducers";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(myLogger, logger))
);

export default store;
