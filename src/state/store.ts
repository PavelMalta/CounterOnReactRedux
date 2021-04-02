import {combineReducers, createStore} from "redux";
import {countReducer} from "./count-reducer";


const rootReducer = combineReducers({
    count: countReducer,
})

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store;