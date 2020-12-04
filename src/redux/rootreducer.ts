import { combineReducers } from "redux"
import { cartContentReducer } from "./cartContentsReducer"
import { cartCounterReducer } from "./cartCounterReducer"

export const rootReducer = combineReducers({
    cartCounter: cartCounterReducer,
    cartContent: cartContentReducer
})