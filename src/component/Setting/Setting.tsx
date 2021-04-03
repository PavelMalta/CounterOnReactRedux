import React from "react";
import s from "./Setting.module.css"
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {setErrorAC, setMaxValueAC, setMinValueAC} from "../../state/count-reducer";

export const Setting = () => {
    const maxValue = useSelector((state: AppRootStateType) => state.count.maxValue)
    const minValue = useSelector((state:AppRootStateType) => state.count.minValue)
    const error = useSelector((state:AppRootStateType) => state.count.error)
    const dispatch = useDispatch()

    const setMaxValue = (maxValue: number) => {
        dispatch(setMaxValueAC(maxValue))
    }
    const setMinValue = (minValue: number) => {
        dispatch(setMinValueAC(minValue))
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
                    <Button title={"set"}/>
            </div>

        </div>
    )
}