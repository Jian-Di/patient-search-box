import React, {useState, useEffect} from "react";
import DataList from "./DataList";
import "./DataCard.css";

/**
 * Show 出已經查到的data
 * 
 * Proptypes
 * @param {Array} activeData 現在已經被查到的data們  
 */

const DataCard = (props) => {
    const activeData = props.activeData;
    const cateNameList = ["Monitor", "Dialogue", "PE", "Lab", "Image"];
    
    const DataLists = cateNameList.map((cateName) => (
        <DataList
            cateName={cateName} 
            data={activeData.filter((data) => (data.cate === cateName))}  />
    ));

    return (
        <>
        <div className="DataCard">
            <p>Data Board</p>
            {DataLists}
        </div>
        </>
    )
};

export default DataCard;
