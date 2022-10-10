import React, {useState, useEffect} from "react";
import "./PatientInfo.css";

/**
 * 病人資訊欄
 * 
 * Propstype
 * @param {String} infoText 病人介紹文字 
 */
const PatientInfo = (props) => {   
    return (
        <> 
        <div className="PatientInfo-container">
            <div className="PatientInfo-topic">
                <p>Patient Info</p>
            </div>
            <div className="PatientInfo-text">
                <p>{props.infoText}</p>
            </div>
        </div>
        </>
    )
};

export default PatientInfo;