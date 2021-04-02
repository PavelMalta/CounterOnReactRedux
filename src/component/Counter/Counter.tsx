import React from "react";
import { Button } from "../Button/Button";
import s from "./Counter.module.css"

export const Counter = () => {
    return (
        <div className={s.setting}>
            <div className={s.monitor}>
                    <div className={s.count}></div>
            </div>
            <div className={s.button_container}>
                <Button title={"inc"}/>
                <Button title={"reset"}/>
            </div>
        </div>
    )
}