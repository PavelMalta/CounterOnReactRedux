
const initialState = {
    maxValue: 0,
    minValue: 0
}

type InitialStateType = typeof initialState

export const countReducer = (state: InitialStateType, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "SET-MAX-VALUE":
            return {...state, maxValue: action.maxValue}
        default:
            return state
    }
}

type ActionType = ReturnType<typeof setMaxValueAC>

export const setMaxValueAC = (maxValue: number) => {
    return {type: 'SET-MAX-VALUE', maxValue} as const
}