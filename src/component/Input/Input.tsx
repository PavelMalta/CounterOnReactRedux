import React, {ChangeEvent} from "react";
import s from "./Input.module.css"

type InputPropsType = {
    setValue: (value: number) => void
    value: number
}

export const Input = (props: InputPropsType) => {

    const setValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setValue(+e.currentTarget.value)
    }

    return (
        <div>
            <input type={"number"}
                   className={s.superInput}
                   onChange={setValue}
                   value={props.value}
            />
        </div>
    )
}
