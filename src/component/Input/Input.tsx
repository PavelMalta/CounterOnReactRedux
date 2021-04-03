import React, {ChangeEvent} from "react";
import s from "./Input.module.css"

type InputPropsType = {
    setValue: (value: number) => void
    value: number
    error: boolean
}

export const Input = (props: InputPropsType) => {

    const setValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setValue(+e.currentTarget.value)
    }
    const className = props.error ? s.errorInput : s.superInput

    return (
        <div>
            <input type={"number"}
                   className={className}
                   onChange={setValue}
                   value={props.value}
            />
        </div>
    )
}
