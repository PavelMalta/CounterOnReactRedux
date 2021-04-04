import React from 'react';
import s from "./App.module.css"
import {Counter} from "./component/Counter/Counter";
import {Setting} from "./component/Setting/Setting";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";


function App() {

    const value = useSelector((state: AppRootStateType) => state.count.value)
    const maxValue = useSelector((state: AppRootStateType) => state.count.maxValue)
    const minValue = useSelector((state: AppRootStateType) => state.count.minValue)
    const error = useSelector((state: AppRootStateType) => state.count.error)
    const disabled = useSelector((state: AppRootStateType) => state.count.disabled)

  return (
    <div className={s.app}>
        <Setting value={value}
                 minValue={minValue}
                 maxValue={maxValue}
                 error={error}
                 disabled={disabled}
        />
        <Counter value={value}
                 minValue={minValue}
                 maxValue={maxValue}
                 error={error}
                 disabled={disabled}
        />
    </div>
  );
}

export default App;
