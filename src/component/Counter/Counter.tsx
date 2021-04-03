import React from "react";
import { Button } from "../Button/Button";
import s from "./Counter.module.css"
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";

export const Counter = () => {

    const error = useSelector((state: AppRootStateType) => state.count.error)
    const value = useSelector((state:AppRootStateType) => state.count.value)

    return (
        <div className={s.setting}>
            <div className={s.monitor}>
                {error
                    ? <div className={s.error}>Incorrect value!</div>
                    : <div className={s.count}>{value}</div>}
            </div>
            <div className={s.button_container}>
                <Button title={"inc"}/>
                <Button title={"reset"}/>
            </div>
        </div>
    )
}