import React from "react";
import s from "./Setting.module.css"
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {setMaxValueAC, setMinValueAC} from "../../state/count-reducer";

export const Setting = () => {
    const maxValue = useSelector((state: AppRootStateType) => state.count.maxValue)
    const minValue = useSelector((state:AppRootStateType) => state.count.minValue)
    const dispatch = useDispatch()

    const setMaxValue = (maxValue: number) => {
        dispatch(setMaxValueAC(maxValue))
    }
    const setMinValue = (minValue: number) => {
        dispatch(setMinValueAC(minValue))
    }

    return (
        <div className={s.counter}>
            <div className={s.input_container}>
                <div className={s.item}>
                    <div className={s.description}>max value:</div>
                    <div>
                        <Input setValue={setMaxValue} value={maxValue}/>
                    </div>
                </div>
                <div className={s.item}>
                    <div className={s.description}>min value:</div>
                    <div>
                        <Input setValue={setMinValue} value={minValue}/>
                    </div>
                </div>

            </div>
            <div className={s.button_container}>
                    <Button title={"set"}/>
            </div>

        </div>
    )
}