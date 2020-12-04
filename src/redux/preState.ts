import { State } from "./inrefases";

export function preloadedState(): State | undefined {
    let state = localStorage.getItem('cart_content')
    if(state) return JSON.parse(state)
    return undefined
}