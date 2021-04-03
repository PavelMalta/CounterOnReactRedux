const initialState = {
    maxValue: 0 as number,
    minValue: 0 as number,
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
        default:
            return state
    }
}

type ActionType = ReturnType<typeof setMaxValueAC>
    | ReturnType<typeof setMinValueAC>
    | ReturnType<typeof setErrorAC>

export const setMaxValueAC = (maxValue: number) => {
    return {type: 'SET-MAX-VALUE', maxValue} as const
}
export const setMinValueAC = (minValue: number) => {
    return {type: 'SET-MIN-VALUE', minValue} as const
}
export const setErrorAC = (error: boolean) => {
    return {type: 'SET-ERROR', error} as const
}