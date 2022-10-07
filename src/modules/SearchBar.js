import React, {useState, useEffect} from "react";
import "./SearchBar.css";
import patientData from "./temData";

/**
 * 搜尋欄 (parent component: DataSearch.js)
 * 1. 根據 input value & categories 改變建議清單
 * 2. 可用上下鍵選擇建議清單的項目
 * 3. Enter後會將 value 存成 active data 傳到 Data card
 * 
 * Proptypes
 * @param {Array} activeData 現在已經查到的 activeData
 * @param {({submittedData} => void)} setActiveData 設定現在已經查到的 activeData
 */

const SearchBar = (props) => {
    /**
     * category 的 dropdown menu
     */
    const [cateName, setCateName] = useState("All Categories");
    const [cateToggleOn, setCateToggleOn] = useState(false);
    const cateNameList = ["All Categories", "Dialogue", "PE", "Lab", "Image", "Monitor"];

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
     * 上下鍵操控 SearchBar 的 focus
     */

    const [focusIndex, setFocusIndex] = useState(-1);
    
    const handleKey = (event) => {
        if (event.key === "Enter") {
            handleEnterKey(event);
        } else if (event.key === "ArrowUp"){
            handleArrowUpKey(event);
        } else if (event.key === "ArrowDown"){
            handleArrowDownKey(event);
        }
    };

    const handleArrowUpKey = (event) => {
        event.preventDefault();
        setFocusIndex((focusIndex) => {
            if (focusIndex <= -1){
                return (searchList.length - 1);
            }
            return (focusIndex - 1)
        });
    };

    const handleArrowDownKey = (event) => {
        event.preventDefault();
        setFocusIndex((focusIndex) => {
            if (focusIndex >= searchList.length - 1){
                return -1;
            }
            return (focusIndex + 1)
        });
    };

    /**
     * input box 的建議搜尋清單
     */
    const [value, setValue] = useState("");

    const cateFilteredPatientData = (cateName === "All Categories") ? patientData : patientData.filter((data) => data.cate == cateName);

    const filteredPatientData = cateFilteredPatientData.filter((data) => data.ques.toLowerCase().indexOf(value.toLowerCase()) !== -1);

    const searchList = filteredPatientData.map((patientData, index) => (
        <li onClick={() => {
            setValue(patientData.ques);
            }}
            onMouseOver={() => {setFocusIndex(-1)}}
            className={index === focusIndex ? "focus": null}
        >
            {`${patientData.cate}: ${patientData.ques}`}
        </li>
    ));

    const handleChange = (event) => {
        setValue(event.target.value);
        setFocusIndex(-1);
        setTempEnterEffect(false);
    };

    /**
     * 送出 input 裡面的文字 回傳對應的 data object 到 data card
     * 已經送過的文字就不能再送
     * 按下enter之後 建議清單會暫時消失
     */

    const [tempEnterEffect, setTempEnterEffect] = useState(false);

    const handleEnterKey = (event) => {
        event.preventDefault();
        if (event.key.value !== "" && (focusIndex < 0 || focusIndex >= searchList.length)) {
            handleSubmit();
        } else{
            setValue(filteredPatientData[focusIndex].ques)
            setFocusIndex(-1);
            setTempEnterEffect(true);
        }
    };
    
    const handleSubmit = () => {
        const quesAskedOrNot = (value) => {
            for (let data of props.activeData) {
                if (data.ques === value) {
                    return true
                }
            }
            return false
        };
        
        let submittedData = [];

        if (quesAskedOrNot(value) === false) {
            submittedData = getDataOrNot(value);
        }

        if (submittedData !== []){
            props.setActiveData((activeData) => (activeData.concat(submittedData)));
        }
        setValue("");
    };

    const getDataOrNot = (dataQues) => {
        return patientData.filter((data) => (data.ques === dataQues))   
    };

    return (
        <>
        <div className="searchBarCard">
            <div className="searchBar">
                <div id="selectCate" onClick={changeCateToggle}>
                    {cateName}
                    <img src="arrow.png" />
                    <ul id="cateList" className={cateToggleOn ? "open" : "close"}>
                        {cateList}
                    </ul>
                </div>
                <div id="searchBox">
                    <input 
                        type="text" 
                        placeholder={`Press enter to search in ${cateName}`}
                        value={value}
                        onChange={handleChange}
                        onKeyDown={handleKey}
                        />
                    <button
                        type="submit"
                        className="SearchBar-button"
                        value="submit"
                        onClick={handleSubmit}>
                        <img src="search.png" />
                    </button>
                    <ul id="searchList" className={searchList.length !== 0 && value !== "" && !(tempEnterEffect) ? "open" : "close"}>
                        {searchList}
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
}

export default SearchBar;