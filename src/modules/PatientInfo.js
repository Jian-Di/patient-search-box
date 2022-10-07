import React, {useState, useEffect} from "react";
import "./PatientInfo.css";

const PatientInfo = () => {
    const patientInfoText = "A 33-year-old woman presented to ER for fever for two days"
    
    return (
        <> 
        <div className="PatientInfo-container">
            <div className="PatientInfo-topic">
                Patient Info
            </div>
            <div className="PatientInfo-text">
                {patientInfoText}
            </div>
        </div>
        </>
    )
};

export default PatientInfo;