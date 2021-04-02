import React from 'react';
import s from "./App.module.css"
import {Counter} from "./component/Counter/Counter";
import {Setting} from "./component/Setting/Setting";


function App() {


  return (
    <div className={s.app}>
        <Setting/>
        <Counter/>
    </div>
  );
}

export default App;
