import React, {useState, useEffect} from "react";
import './App.css';
import SearchData from "./modules/SearchData.js";
import PatientInfo from "./modules/PatientInfo.js";
import CountDown from "./modules/CountDown.js";
import NoteCard from "./modules/NoteCard.js";
import AnsColumn from "./modules/AnsColumn.js";
import temData from "./modules/temData.js";
import patient1Data from "./modules/patient1";
import Submit from "./modules/Submit";

const App = () => {
    const [layout, setLayout] = useState("oneColumn");
    const [timesUp, setTimesUp] = useState(false)
    const [patientData, setPatientData] = useState([]);

    const loadData = () => {
        let combinedData = temData.map((stanData) => {
            for (let abnormalData of patient1Data) {
                if (stanData.ques === abnormalData.ques) {
                    return abnormalData
                }
            }
            return stanData
        })
        combinedData.unshift(patient1Data[0]);
        
        setPatientData(combinedData);
    };

    useEffect(() => {
        loadData();
    }, [])

    if (patientData.length === 0){
        return (
            <>Loading data</>
        )
    }
    return (
        <>
        <div className="App-container">
            {/* <NavBar /> */}
            <div className="App-main">
                <CountDown 
                    countDownValue={patientData[0].countDownValue} 
                    setTimesUp={setTimesUp} 
                    timesUp={timesUp} 
                    layout={layout}/>
                <PatientInfo 
                    infoText={patientData[0].infoText}/>
                <SearchData 
                    patientData={patientData} 
                    timesUp={timesUp}/>
                <NoteCard />
                {layout === "twoColumn" ? null :
                <Submit 
                    setLayout={setLayout}/>}
            </div>
            {layout === "twoColumn" ? 
            <AnsColumn 
                ansPatientData={patient1Data}/> 
            : null}
        </div>
        </>
    )
}

export default App;
