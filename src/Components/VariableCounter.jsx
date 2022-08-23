import { connect } from "react-redux";
import {
    decrementAction,
    incrementAction,
} from "../redux/Counter/actionsCreators";
import {
    dDecrementAction,
    dIncrementAction,
} from "../redux/DynamicCounter/actionsCreators";

const VariableCounter = ({ count, incrementHandler, decrementHandler }) => {
    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div className="text-2xl font-semibold">{count}</div>
            <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={incrementHandler}
                >
                    Increment
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={decrementHandler}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
};

const mapStateToProps = (state, { dynamic }) => {
    return {
        count: dynamic ? state.dCounter.value : state.counter.value,
    };
};

const mapDispatchToProps = (dispatch, { dynamic }) => {
    return {
        incrementHandler: () => {
            dynamic
                ? dispatch(dIncrementAction(5))
                : dispatch(incrementAction(1));
        },
        decrementHandler: () => {
            dynamic
                ? dispatch(dDecrementAction(5))
                : dispatch(decrementAction(1));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(VariableCounter);
