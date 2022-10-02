import React, {useState, useEffect} from "react";
import "./SearchBar.css";
import patientData from "./temData";

const SearchBar = () => {
    /**
     * category 的 dropdown menu
     */
    const [cateName, setCateName] = useState("All Categories");
    const [cateToggleOn, setCateToggleOn] = useState(false);
    const cateNameList = ["All Categories", "Dialogue", "PE", "Lab Study", "Image", "Monitor"];

    const changeCateToggle = () => {
        setCateToggleOn(!cateToggleOn);
    };
    
    const cateList = cateNameList.map((cateName) => (
        <li onClick={() => {
            setCateName(cateName);
        }}>
            {cateName}
        </li>
    ));

    /**
     * input box 的建議搜尋清單
     */
    const [value, setValue] = useState("");

    const cateFilteredPatientData = (cateName == "All Categories")? patientData : patientData.filter((data) => data.cate == cateName);

    const filteredPatientData = cateFilteredPatientData.filter((data) => data.ques.toLowerCase().indexOf(value.toLowerCase()) !== -1);

    const searchList = filteredPatientData.map((patientData) => (
        <li onClick={() => {
            setValue(patientData.ques);
        }}>
            {`${patientData.cate}: ${patientData.ques}`}
        </li>
    ));

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    

    return (
        <>
        <div className="searchBar">
            <div id="selectCate" onClick={changeCateToggle}>
                <p>{cateName}</p>
                <img src="arrow.png" />
                <ul id="cateList" className={cateToggleOn?"open":"close"}>
                    {cateList}
                </ul>
            </div>
            <div id="searchBox">
                <input 
                    type="text" 
                    placeholder={`Search in ${cateName}`}
                    value={value}
                    onChange={handleChange} />
                <ul id="searchList" className={value?"open":"close"}>
                    {searchList}
                </ul>
            </div>
        </div>
        </>
    );
}

export default SearchBar;