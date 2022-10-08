import React from "react";
import "./Image.css"

const Image = (props) => {

    const handleOnClick = () => {
        props.setClickedImage("")
    };

    return (
        <>
        <div className="Image-overlay">
        </div>
        <div className="Image-container" onClick={handleOnClick}>
            <img src={props.imgsrc} />
        </div>
        </>
    )

};

export default Image;