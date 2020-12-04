import { CartContent, CartCounter } from "./inrefases";
import { ADD_CART_CONTENT, DECREMENT_CART_COUNTER, DELETE_CART_CONTENT, INCREMENT_CART_COUNTER } from "./types";


export function incrementCartCounter(): CartCounter {
    return {
        type: INCREMENT_CART_COUNTER
    }
}
export function decrementCartCounter(): CartCounter {
    return {
        type: DECREMENT_CART_COUNTER
    }
}

export function addCartContent(product: string): CartContent {
    return {
        type: ADD_CART_CONTENT,
        product
    }
}
export function deleteCartContent(product: string): CartContent {
    return {
        type: DELETE_CART_CONTENT,
        product
    }
}