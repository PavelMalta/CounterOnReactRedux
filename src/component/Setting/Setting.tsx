import React from "react";
import s from "./Setting.module.css"
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";
import {useDispatch} from "react-redux";
import {disabledButtonAC, setErrorAC, setMaxValueAC, setMinValueAC, setValueAC} from "../../state/count-reducer";

type SettingPropsType = {
    value: null | number
    minValue: number
    maxValue: number
    error: boolean
    disabled: boolean
}

export const Setting: React.FC<SettingPropsType> = (
    {value,minValue, maxValue, error, disabled}
    ) => {

    const dispatch = useDispatch()

    const setMaxValue = (maxValue: number) => {
        dispatch(setMaxValueAC(maxValue))
        dispatch(disabledButtonAC(true))
    }
    const setMinValue = (minValue: number) => {
        dispatch(setMinValueAC(minValue))
        dispatch(disabledButtonAC(true))
    }
    const setValue = () => {
        dispatch(setValueAC(minValue))
        dispatch(disabledButtonAC(false))
    }

    if (maxValue <= minValue) {
        console.log("error")
        dispatch(setErrorAC(true))
    } else {
        console.log("doesn't error")
        dispatch(setErrorAC(false))
    }

    return (
        <div className={s.counter}>
            <div className={s.input_container}>
                <div className={s.item}>
                    <div className={s.description}>max value:</div>
                    <div>
                        <Input setValue={setMaxValue} value={maxValue} error={error}/>
                    </div>
                </div>
                <div className={s.item}>
                    <div className={s.description}>min value:</div>
                    <div>
                        <Input setValue={setMinValue} value={minValue} error={error}/>
                    </div>
                </div>

            </div>
            <div className={s.button_container}>
                    <Button title={"set"} onClick={setValue} disabled={!disabled || error}/>
            </div>

        </div>
    )
}