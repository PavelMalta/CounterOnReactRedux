import React from "react";
import { Button } from "../Button/Button";
import s from "./Counter.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {setIncrementAC} from "../../state/count-reducer";

export const Counter = () => {

    const error = useSelector((state: AppRootStateType) => state.count.error)
    const value = useSelector((state:AppRootStateType) => state.count.value)
    const dispatch = useDispatch()

    const setIncrement = () => dispatch(setIncrementAC())

    return (
        <div className={s.setting}>
            <div className={s.monitor}>
                {error
                    ? <div className={s.error}>Incorrect value!</div>
                    : <div className={s.count}>{value}</div>}
            </div>
            <div className={s.button_container}>
                <Button title={"inc"} onClick={setIncrement}/>
                <Button title={"reset"}/>
            </div>
        </div>
    )
}