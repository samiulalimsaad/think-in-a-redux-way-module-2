import { DECREMENT, INCREMENT } from "./actionsTypes";

export const incrementAction = (payload) => ({ type: INCREMENT, payload });
export const decrementAction = (payload) => ({ type: DECREMENT, payload });
