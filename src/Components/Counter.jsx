import { connect } from "react-redux";
import {
    decrementAction,
    incrementAction,
} from "../redux/Counter/actionsCreators";

const Counter = ({ count, incrementHandler, decrementHandler }) => {
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

const mapStateToProps = (state) => {
    console.log({ state });
    return {
        count: state?.value,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        incrementHandler: () => {
            dispatch(incrementAction(1));
        },
        decrementHandler: () => {
            dispatch(decrementAction(1));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
