import React, {useState, useEffect} from "react";
import TextareaAutosize from 'react-textarea-autosize';
import "./NoteCard.css";

/**
 * 讓 User 可以在這裡寫下筆記 
 */

const NoteCard = () => {

    return (
        <>
        <div className="NoteCard">
            <p>Note Board</p>
            <TextareaAutosize 
                className="NoteCard-input"
                placeholder="Write down your note here (e.g. diagnosis, treatment...)" />
        </div>
        </>
    )
};

export default NoteCard;
