import { useDispatch, useSelector } from "react-redux";
import {
    decrementAction,
    incrementAction,
} from "../redux/Counter/actionsCreators";

const HooksCounter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div className="text-2xl font-semibold">{count}</div>
            <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={() => dispatch(incrementAction(1))}
                >
                    Increment
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={() => dispatch(decrementAction(1))}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
};

export default HooksCounter;
