import React from "react";
import s from "./Setting.module.css"
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";

export const Setting = () => {
    return (
        <div className={s.counter}>
            <div className={s.input_container}>
                <div className={s.item}>
                    <div className={s.description}>max value:</div>
                    <div><Input/></div>
                </div>
                <div className={s.item}>
                    <div className={s.description}>min value:</div>
                    <div><Input/></div>
                </div>

            </div>
            <div className={s.button_container}>
                    <Button title={"set"}/>
            </div>

        </div>
    )
}