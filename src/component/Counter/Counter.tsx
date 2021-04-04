import React from "react";
import { Button } from "../Button/Button";
import s from "./Counter.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {resetValueAC, setIncrementAC} from "../../state/count-reducer";

export const Counter = () => {

    const error = useSelector((state: AppRootStateType) => state.count.error)
    const value = useSelector((state:AppRootStateType) => state.count.value)
    const maxValue = useSelector((state:AppRootStateType) => state.count.maxValue)
    const minValue = useSelector((state:AppRootStateType) => state.count.minValue)
    const dispatch = useDispatch()

    const setIncrement = () => dispatch(setIncrementAC())
    const resetValue = () => dispatch(resetValueAC())

    const disabledInc = () => value === maxValue
    const disabledReset = () => value === minValue

    return (
        <div className={s.setting}>
            <div className={s.monitor}>
                {error
                    ? <div className={s.error}>Incorrect value!</div>
                    : <div className={s.count}>{value}</div>}
            </div>
            <div className={s.button_container}>
                <Button title={"inc"} onClick={setIncrement} disabled={disabledInc()}/>
                <Button title={"reset"} onClick={resetValue} disabled={disabledReset()}/>
            </div>
        </div>
    )
}