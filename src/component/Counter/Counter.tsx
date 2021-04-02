import React from "react";
import s from "./Counter.module.css"
import {Button} from "../Button/Button";

export const Counter = () => {
    return (
        <div className={s.counter}>
            <div className={s.input_container}>
                <div className={s.item}>
                    <div className={s.description}>max value:</div>
                    <div><input/></div>
                </div>
                <div className={s.item}>
                    <div className={s.description}>min value:</div>
                    <div><input/></div>
                </div>

            </div>
            <div className={s.button_container}>
                    <Button title={"set"}/>
            </div>

        </div>
    )
}