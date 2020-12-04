export interface ActionCounter {
    type: string
}

export interface ActionContent {
    type: string,
    product: string
}

export interface ContentState {
    [key: string]: number
}

export interface CounterState {
    value: number
}

export interface State {
    cartCounter: CounterState,
    cartContent: ContentState
}

export interface CartCounter {
    type: string
}

export interface CartContent {
    type: string,
    product: string
}