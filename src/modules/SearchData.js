import React, {useState} from "react";
import DataCard from "./DataCard";
import SearchBar from "./SearchBar";

/**
 * 讓資料跑來跑去的中繼站
 * 
 * @param {Array} patientData
 * @param {Boolean} timesUp 時間到了沒
 */
const SearchData = (props) => {
    const [activeData, setActiveData] = useState([]);

    return (
        <>
            <SearchBar patientData={props.patientData} activeData={activeData} setActiveData={setActiveData} timesUp={props.timesUp} />
            <DataCard activeData={activeData} />
        </>
    )
};

export default SearchData;