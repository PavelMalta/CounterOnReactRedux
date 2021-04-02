import React from "react";
import s from "./Input.module.css"

type InputPropsType = {

}

export const Input = (props: InputPropsType) => {
    return (
        <div>
            <input type={"number"}
                   className={s.superInput}
            />
        </div>
    )
}
