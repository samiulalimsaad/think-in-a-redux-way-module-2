import { DDECREMENT, DINCREMENT } from "./actionsTypes";

export const dIncrementAction = (payload) => ({ type: DINCREMENT, payload });
export const dDecrementAction = (payload) => ({ type: DDECREMENT, payload });
