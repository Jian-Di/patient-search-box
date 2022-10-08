import React, {useState, useEffect} from "react";
import "./DataList.css"
import Image from "./Image";

/**
 * return 單一種 category 的 active data list HTML
 * 
 * Proptypes
 * @param {Array} data 現在active data 裡面屬於 cateName 的 data list
 * @param {String} cateName 
 */

const DataList = (props) => {
    const [clickedImage, setClickedImage] = useState("");

    const tagOnClick = (data) => {
        setClickedImage(data.imgsrc);
    };

    const dataHTML = (data) => {
        if (props.cateName === "Image") {
            return (
                <div className={"DataList-tag DataList-clickableTag "+ props.cateName} onClick={() => tagOnClick(data)} >
                    {`${data.ques}`}
                    <img src="click.png" />
                </div>
            )
        } else {
            return (
                <div className={"DataList-tag "+ props.cateName}>
                    {`${data.ques}:${data.ans}`}
                </div>
            )
        }
    };

    const data = props.data.map((data) => (dataHTML(data)));

    return (
        <>
        {clickedImage == "" ? null : <Image imgsrc={clickedImage} setClickedImage={setClickedImage} />}
        <div className="DataList">
            {data}
        </div>
        </>
    )
};

export default DataList;