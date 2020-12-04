import { ActionCounter, CounterState } from "./inrefases"
import { DECREMENT_CART_COUNTER, DELETE_CART_CONTENT, INCREMENT_CART_COUNTER } from "./types"


const initialState: CounterState = {
    value: 0
}

export const cartCounterReducer = (state = initialState, action: ActionCounter) => {
    if(action.type === INCREMENT_CART_COUNTER) {
        return {value: state.value + 1}
    }
    if(action.type === DECREMENT_CART_COUNTER) {
        return {value: state.value - 1}
    }
    return state
}