import { useReducer } from "react";

type CounterState = {
    count: number
}
type UpdateAction = {
    type: 'increment' | 'decrement'  // So that in case of any other string, TS will give error
    payload: number
}
type ResetAction = {
    type: 'reset'  // Since in reset we are not sending a payload
}
type CounterAction = UpdateAction | ResetAction

const initialState = {count: 0}

function reducer(state: CounterState, action: CounterAction) {
    switch(action.type) {
        case 'increment':
            return { count: state.count+action.payload}  // Can also be achieved by return { count: state.count+(action.payload || 0)}
        case 'decrement':
            return { count: state.count-action.payload}
        case 'reset':
            return initialState
        default:
            return state
    }
}

export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return(
        <>
            <div>Count: {state.count}</div>
            <button onClick={() => dispatch({type: 'increment', payload: 10})}>
                Increment 10
            </button>
            <button onClick={() => dispatch({type: 'decrement', payload: 10})}>
                Decrement 10
            </button>
            <button onClick={() => dispatch({type: 'reset'})}>
                Reset
            </button>
        </>
    )
}