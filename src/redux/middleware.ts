import { applyMiddleware, Dispatch, Middleware, MiddlewareAPI } from "redux"
import { CartContent, CartCounter, State } from "./inrefases"
import { ADD_CART_CONTENT, DELETE_CART_CONTENT } from "./types"


//ОноБ конечно работает, но так себе получилось, надо все это выкинуть

const localStorageMiddleware: Middleware = (storeAPI: MiddlewareAPI) => {
  return function wrapDispatch(next: Dispatch<CartContent | CartCounter>) {
    return function handleAction(action: CartContent) {
      if (action.type === ADD_CART_CONTENT) {
        const state: State = storeAPI.getState()
        const product = action.product
        const cartContent = state.cartContent
        if (cartContent[product]) localStorage.setItem('cart_content', JSON.stringify({ ...state, cartContent: { ...cartContent, [product]: cartContent[product] + 1 } }))
        else localStorage.setItem('cart_content', JSON.stringify({ ...state, cartContent: { ...cartContent, [product]: 1 } }))
      }
      if (action.type === DELETE_CART_CONTENT) {
        const state: State = storeAPI.getState()
        const product = action.product
        const cartContent = state.cartContent
        if (cartContent[product] === 1) {
          const clone = { ...cartContent }
          delete clone[product]
          localStorage.setItem('cart_content', JSON.stringify({ ...state, cartContent: { ...clone } }))
        } else localStorage.setItem('cart_content', JSON.stringify({ ...state, cartContent: { ...cartContent, [product]: cartContent[product] - 1 } }))
      }

      return next(action)
    }
  }
}

export const middlewareEnhancer = applyMiddleware(localStorageMiddleware) 