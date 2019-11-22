import { createReducer } from "typesafe-actions"
import { IncrementByAction } from "./actions"
import { AppState } from './index';
import { AnyAction } from "redux";

export interface HelloState {
    clicks: number;
}

// This object will hold the initial values for the entire application
const initialState = {
    hello: {
        clicks: 0
    }
}

export const hello = createReducer<HelloState,AnyAction>(initialState.hello)
    .handleAction(IncrementByAction,
        (state, action) =>
            ({ ...state, clicks: state.clicks + action.payload }))