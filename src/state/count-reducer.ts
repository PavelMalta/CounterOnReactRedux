const initialState = {
    maxValue: 0 as number,
    minValue: 0 as number,
    value: null as null | number,
    error: false as boolean
}

type InitialStateType = typeof initialState

export const countReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "SET-MAX-VALUE":
            return {...state, maxValue: action.maxValue}
        case "SET-MIN-VALUE":
            return {...state, minValue: action.minValue}
        case "SET-ERROR":
            return {...state, error: action.error}
        case "SET-VALUE":
            return {...state, value: action.value}
        case "SET-INCREMENT":
            let newValue = state.value
            if (newValue != null && newValue < state.maxValue) {
                newValue = newValue + 1
            }
            return {...state, value: newValue}
        case "RESET-VALUE":
            const resetValue = state.minValue
            return {...state, value: resetValue}
        default:
            return state
    }
}

type ActionType = ReturnType<typeof setMaxValueAC>
    | ReturnType<typeof setMinValueAC>
    | ReturnType<typeof setErrorAC>
    | ReturnType<typeof setValueAC>
    | ReturnType<typeof setIncrementAC>
    | ReturnType<typeof resetValueAC>

export const setMaxValueAC = (maxValue: number) => {
    return {type: 'SET-MAX-VALUE', maxValue} as const
}
export const setMinValueAC = (minValue: number) => {
    return {type: 'SET-MIN-VALUE', minValue} as const
}
export const setErrorAC = (error: boolean) => {
    return {type: 'SET-ERROR', error} as const
}
export const setValueAC = (value: number) => {
    return {type: 'SET-VALUE', value} as const
}
export const setIncrementAC = () => {
    return {type: 'SET-INCREMENT'} as const
}
export const resetValueAC = () => {
    return {type: 'RESET-VALUE'} as const
}