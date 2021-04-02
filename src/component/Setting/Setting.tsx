import React from "react";
import { Button } from "../Button/Button";
import s from "./Setting.module.css"

export const Setting = () => {
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