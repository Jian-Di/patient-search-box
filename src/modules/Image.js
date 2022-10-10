import React from "react";
import "./Image.css"

/**
 * 表現 Image data
 * 
 * @param {String} imgsrc 現在正打開的 img src 
 * @param {(String) => void} setClickedImage 設定現在正打開的 Image
 */
const Image = (props) => {
    return (
        <>
        <div className="Image-overlay">
        </div>
        <div className="Image-container" onClick={() => props.setClickedImage("")}>
            <img src={props.imgsrc} />
        </div>
        </>
    )

};

export default Image;