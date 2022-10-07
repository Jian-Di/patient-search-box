import React, {useState, useEffect} from "react";
import "./PatientInfo.css";

const PatientInfo = () => {
    const patientInfoText = "A 33-year-old woman presented to ER for fever for two days"
    
    return (
        <> 
        <div className="PatientInfo-container">
            <div className="PatientInfo-topic">
                <p>Patient Info</p>
            </div>
            <div className="PatientInfo-text">
                <p>{patientInfoText}</p>
            </div>
        </div>
        </>
    )
};

export default PatientInfo;