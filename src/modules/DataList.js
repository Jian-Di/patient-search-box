import React, {useState, useEffect} from "react";
import "./DataList.css"
import Image from "./Image";
import Tables from "./Tables";

/**
 * 1. return 單一種 category 的 active data list HTML
 * 2. 若點擊 image tag 會 render <Image>
 * 
 * Proptypes
 * @param {Array} data 現在active data 裡面屬於 cateName 的 data list
 * @param {String} cateName 
 */

const DataList = (props) => {
    const [clickedImage, setClickedImage] = useState("");
    const [clickedTable, setClickedTable] = useState([]);

    const handleImage = (data) => {
        if (data.imgsrc === "Not offered"){
            return (
                <div 
                className={"DataList-tag "+ props.cateName}>
                    {`${data.ques}: ${data.imgsrc}`}
                </div>
            )
        } else {
            return (
                <div 
                className={"DataList-tag DataList-clickableTag "+ props.cateName} 
                onClick={() => setClickedImage(`./patient-search-box/${data.imgsrc}`)} >
                    {`${data.ques}`}
                    <img src="./patient-search-box/click.png" />
                </div>
            )
        }
    };

    const handleTable = (data) => {
        return(
            <div 
            className={"DataList-tag DataList-clickableTag "+ props.cateName} 
            onClick={() => setClickedTable(data.ans)} >
                {`${data.ques}`}
                <img src="./patient-search-box/click.png" />
            </div>
        )
    };

    const handleOthers = (data) => {
        if (data.unit) {
            return (
                <div className={"DataList-tag "+ props.cateName}>
                    {`${data.ques}: ${data.ans} ${data.unit}`}
                </div>
            )
        } else {
            return (
                <div className={"DataList-tag "+ props.cateName}>
                    {`${data.ques}: ${data.ans}`}
                </div>
            )
        }
    };

    const dataHTML = (data) => {
        if (props.cateName === "Image") {
            return handleImage(data);
        } else if (Array.isArray(data.ans)) { // 只要 ans 是 array 就代表這是一個 table
            return handleTable(data);
        } else {
            return handleOthers(data);
        }
    };

    const dataListHTML = props.data.map((data) => (dataHTML(data)));

    return (
        <>
        {clickedImage === "" ? null : <Image imgsrc={clickedImage} setClickedImage={setClickedImage} />}
        {clickedTable.length === 0 ? null : <Tables dataTable={clickedTable} setClickedTable={setClickedTable} />}
        <div className="DataList">
            {dataListHTML}
        </div>
        </>
    )
};

export default DataList;