import React, {useState} from "react";
import DataCard from "./DataCard";
import SearchBar from "./SearchBar";

const SearchData = () => {
    const [activeData, setActiveData] = useState([]);

    return (
        <>
            <SearchBar activeData={activeData} setActiveData={setActiveData} />
            <DataCard activeData={activeData} />
        </>
    )
};

export default SearchData;