import React, {useState, useEffect} from "react";
import "./AnsColumn.css";
import DataCard from "./DataCard";

/**
 * 解答區
 * 
 * Propstype
 * @param {Array} ansPatientData 除了index 0 放一些文字 其他都是data
 */

const AnsColumn = (props) => {

    return (
        <>
        <div className="AnsColumn">
            <div className="AnsColumn-container">
                <div className="AnsColumn-topic">
                    <p>Answer</p>
                </div>
                <div className="AnsColumn-text">
                    <p>{props.ansPatientData[0].ansText}</p>
                </div>
                <DataCard activeData={props.ansPatientData}/>
            </div>
        </div>
        </>
    )
};

export default AnsColumn;
