import React, {useState, useEffect} from "react";
import "./DataList.css"
import { Image } from 'antd';

/**
 * return 單一種 category 的 active data list HTML
 * 
 * Proptypes
 * @param {Array} data 現在active data 裡面屬於 cateName 的 data list
 * @param {String} cateName 
 */

const DataList = (props) => {

    const tagOnClick = () => {
        console.log("click");
    };

    const dataHTML = (data) => {
        if (data.click === undefined) {
            return (
                <div className={"DataList-tag "+ props.cateName}>
                    {`${data.ques}:${data.ans}`}
                </div>
            )
        } else {
            return (
                <div className={"DataList-tag "+ props.cateName} onClick={tagOnClick} >
                    {`${data.ques}　`}
                    <Image
                        width={30}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                </div>
            )
        }
    };

    const data = props.data.map((data) => (dataHTML(data)));

    return (
        <>
        <div className="DataList">
            {data}
        </div>
        </>
    )
};

export default DataList;