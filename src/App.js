import React from "react";
import SearchData from "./modules/SearchData.js";
import PatientInfo from "./modules/PatientInfo.js";
import CountDown from "./modules/CountDown.js";
import './App.css';
import 'antd/dist/antd.css'

const App = () => {

    return (
        <>
            {/* <NavBar /> */}
            <div className="App-container">
                <CountDown />
                <PatientInfo />
                <SearchData />
            </div>
        </>
    )
}

export default App;
