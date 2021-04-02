import React from "react";
import s from "./Setting.module.css"

export const Setting = () => {
    return (
        <div className={s.setting}>
            <div className={s.monitor}>
                    <div className={s.count}></div>
            </div>
            <div className={s.button_container}>
                <button>inc</button>
                <button>reset</button>
            </div>
        </div>
    )
}