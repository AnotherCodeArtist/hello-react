import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '.';
import { HelloState } from './reducers';
import { IncrementByAction } from './actions';

interface HelloProps {
    name: string;
}

export const Hello: React.FunctionComponent<HelloProps> = ({ name }) => {

    const {clicks} = useSelector<AppState, HelloState>(state => state.hello);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Hello {name}!</h1>
            <p>Number of clicks: {clicks}</p>
            <button onClick={() => dispatch(IncrementByAction(5))}>Click me!</button>
        </div>
    )
}
    