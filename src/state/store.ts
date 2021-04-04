import {combineReducers, createStore} from "redux";
import {countReducer} from "./count-reducer";


const rootReducer = combineReducers({
    count: countReducer,
})

let preloadedState;
const persistedTodosString = localStorage.getItem('state')
if (persistedTodosString) {
    preloadedState = JSON.parse(persistedTodosString)
}

export const store = createStore(rootReducer, preloadedState)


store.subscribe(() => {
    localStorage.setItem('state', JSON.stringify(store.getState()))
})

export type AppRootStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store;