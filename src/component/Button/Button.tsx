import React from "react";
import s from "./Button.module.css"

type ButtonPropsType = {
    title: string
}

export const Button = (props: ButtonPropsType) => {
    return (
     <div className={s.item}>
         <button>{props.title}</button>
     </div>
    )
}
