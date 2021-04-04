import React from "react";
import {Button} from "../Button/Button";
import s from "./Counter.module.css"
import {useDispatch} from "react-redux";
import {resetValueAC, setIncrementAC} from "../../state/count-reducer";

type CounterPropsType = {
    value: null | number
    minValue: number
    maxValue: number
    error: boolean
    disabled: boolean
}

export const Counter: React.FC<CounterPropsType> = (
    {value, minValue, maxValue, error, disabled}
) => {

    const dispatch = useDispatch()

    const setIncrement = () => dispatch(setIncrementAC())
    const resetValue = () => dispatch(resetValueAC())

    const disabledInc = () => value === maxValue
    const disabledReset = () => value === minValue

    const errorMonitor = disabledInc()

    return (
        <div className={s.setting}>
            <div className={s.monitor}>
                {error
                    ? <div className={s.error}>Incorrect value!</div>
                    : disabled
                        ? <div className={s.description}>enter values and press 'set'</div>
                        : <div className={errorMonitor ? `${s.errorCount} ${s.count}` : s.count}> {value}</div>}
            </div>
            <div className={s.button_container}>
                <Button title={"inc"} onClick={setIncrement} disabled={disabledInc() || disabled}/>
                <Button title={"reset"} onClick={resetValue} disabled={disabledReset() || disabled}/>
            </div>
        </div>
    )
}