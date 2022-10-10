import React from "react";
import "./Submit.css"

const Submit = (props) => {

    const handleOnClick = () => {
        let yes = window.confirm("Are you sure to submmit?\n*WARN: this page can NOT be edited after submission");
        if (yes) {
            props.setLayout("twoColumn")
        }
    };

    return (
        <>
        <div className="Submit-container">
            <button className="Submit" onClick={handleOnClick}>
                Submit
            </button>
        </div>
        </>
    )

};

export default Submit;