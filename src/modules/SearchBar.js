import React, {useState} from "react";
import "./SearchBar.css";

/**
 * 搜尋欄 (parent component: DataSearch.js)
 * 1. 根據 input value & categories 改變建議清單
 * 2. 可用上下鍵選擇建議清單的項目
 * 3. Enter後會將 value 存成 active data 傳到 Data card
 * 
 * Proptypes
 * @param {Array} patientData 此病人的所有 data
 * @param {Array} activeData 現在已經查到的 activeData
 * @param {({submittedData} => void)} setActiveData 設定現在已經查到的 activeData
 * @param {Boolean} timesUp 時間到了沒
 */

const SearchBar = (props) => {
    /**
     * category 的 dropdown menu
     */
    const patientData = props.patientData;
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
     * 處理 click
     */
    const [value, setValue] = useState("");

    const cateFilteredPatientData = (cateName === "All Categories") ? patientData : patientData.filter((data) => data.cate === cateName);

    const filteredPatientData = cateFilteredPatientData.filter((data) => data.ques.toLowerCase().indexOf(value.toLowerCase()) !== -1);

    const searchList = filteredPatientData.map((patientData, index) => (
        <li onClick={(event) => handleClickSearchList(event, patientData)}
            onMouseOver={() => {setFocusIndex(-1)}}
            className={index === focusIndex ? "focus": null}
        >
            {`${patientData.cate}: ${patientData.ques}`}
        </li>
    ));

    const handleClickSearchList = (event, patientData) => {
        event.preventDefault();
        setValue("");
        addTags(patientData.ques);
    };


    const handleChange = (event) => {
        setValue(event.target.value);
        setFocusIndex(-1);
    };

    /**
     * 處理 Enter
     * 1. 如果此時沒有focus在建議清單上 就送出所有 tag 的文字 回傳對應的 data object 到 data card
     * 2. 已經送過的文字就不能再送
     * 3. 若此時有focus在建議清單上 會增加一項對應的tag
     * 4. 如果輸入的非有效文字illegalInput: true 會產生紅框
     */

    const [illegalInput, setIllegalInput] = useState(false);

    const handleEnterKey = (event) => {
        event.preventDefault();
        if (focusIndex < 0 || focusIndex >= searchList.length) {
            tags.forEach((tag) => handleSubmit(tag));
            setTags([]);
        } else if (value !== ""){ 
            addTags(filteredPatientData[focusIndex].ques)
            setValue("")
            setFocusIndex(-1);
        }
    };
    
    const handleSubmit = (value) => {
        const submittedData = getDataOrNot(value);
        const quesAskedOrNot = (value) => {
            for (let data of props.activeData) {
                if (data.ques === value) {
                    return true
                }
            }
            return false
        };

        if (quesAskedOrNot(value) === false && submittedData.length !== 0){
            props.setActiveData((activeData) => [...activeData, ...submittedData]);
            setIllegalInput(false); 
        } else {
            setIllegalInput(true);
        }
        setValue("");
    };

    const getDataOrNot = (dataQues) => {
        return patientData.filter((data) => (data.ques === dataQues))   
    };

    /**
     * 處理 Tags
     */
    const [tags, setTags] = useState([]);

    const addTags = (value) => {
        if (!tags.includes(value)){
            setTags([...tags, value]);
        } else {
            setIllegalInput(true);
        }
    };

    const removeTags = (indexToRemove) => {
        setTags(tags.filter((_, index) => index !== indexToRemove));
    };

    const tagList = tags.map((tag, index) => (
        <li index={index}>
            <span>{tag}</span>
            <img 
            src="./patient-search-box/delete.png"
            onClick={() => removeTags(index)}></img>
        </li>
    ));

    return (
        <>
        <div className="SearchBar-card">
            <div className={illegalInput ? "SearchBar-bar SearchBar-illegalBar" : "SearchBar-bar"}>
                <div className="SearchBar-selectCate" onClick={changeCateToggle}>
                    <p>{cateName}</p>
                    <img src="./patient-search-box/arrow.png" alt="" />
                    <ul className={cateToggleOn ? "open" : "close"}>
                        {cateList}
                    </ul>
                </div>
                <div className="SearchBar-searchBox">
                    <ul className="SearchBar-tag">
                        {tagList}
                    </ul>
                    <div className="SearchBar-inputColumn">
                        {props.timesUp ? 
                        <input
                            readonly="readonly"
                            placeholder="Times Up!"/>
                        : 
                        <input 
                            type="text" 
                            placeholder={`Press enter to search in ${cateName}`}
                            value={value}
                            onChange={handleChange}
                            onKeyDown={handleKey}
                            />
                        }
                        <button
                            type="submit"
                            className="SearchBar-button"
                            value="submit"
                            onClick={handleSubmit}>
                            <img src="./patient-search-box/search.png" alt="" />
                        </button>
                    </div>
                    <ul className={"SearchBar-searchList " + (searchList.length !== 0 && value !== "" ? "open" : "close")}>
                        {searchList}
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
}

export default SearchBar;