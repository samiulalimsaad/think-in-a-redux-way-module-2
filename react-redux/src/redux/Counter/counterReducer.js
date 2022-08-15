import { DECREMENT, INCREMENT } from "./actionsTypes";

const initialState = {
    value: 0,
};
export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                value: state.value + action.payload,
            };

        case DECREMENT:
            return {
                ...state,
                value: state.value - action.payload,
            };

        default:
            state;
    }
};
