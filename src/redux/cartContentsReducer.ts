import { ActionContent, ContentState } from "./inrefases"
import {  ADD_CART_CONTENT, DELETE_CART_CONTENT } from "./types";


const initialState: ContentState = {}

export const cartContentReducer = (state = initialState, {type, product}: ActionContent) => {
    switch (type) {
        case ADD_CART_CONTENT: {
            if(state[product]) {
                return {...state, [product]:  state[product] + 1}
            } else return {...state, [product]: 1 }
        }
        case DELETE_CART_CONTENT: {
            if(state[product] > 1) {

                return {...state, [product]:  state[product] - 1}
            } else {
                const clone = {...state}
                delete clone[product]
                return clone
            }
        }
    }

    return state
}