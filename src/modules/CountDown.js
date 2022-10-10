import React, {useState, useEffect} from "react";
import "./CountDown.css";

/**
 * 倒數計時器
 * 
 * Propstype
 * @param {Number} countDownValue 就是要倒數的時間 單位ms
 * @param {(Boolean) => void} setTimesUp 設定時間到了沒
 * @param {Boolean} timesUp 時間到了沒
 * @param {String} layout 現在的排版
 */
const CountDown = (props) => {
    const countDownValue = props.countDownValue;
    const [countDown, setCountDown] = useState(new Date(countDownValue));
    
    useEffect(() => {
        let interval = setInterval(() => {
            setCountDown(new Date(countDown.getTime()-1000))
        }, 1000);

        if (countDown.getTime() <=  0){
            props.setTimesUp(true);
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [countDown]);

    /**
     * 把不到10的數字補成二位數，如 9 -> 09
     */

    const plusZero = (num) => {
        return num < 10 ? "0" + num.toString() : num.toString()
    }

    const returnMin = plusZero(countDown.getMinutes());
    const returnSec = plusZero(countDown.getSeconds());
    
    if (props.timesUp || props.layout === "twoColumn" ) {
        props.setTimesUp(true); // 如果變 twoColumn 也就是公布解答 就自動視為時間到
        return (<></>)
    }

    return (
        <div className="Countdown-container">
            <div className="Countdown-card">
                <p>{returnMin}</p>
            </div>
            <p className="colon">:</p>
            <div className="Countdown-card">
                <p>{returnSec}</p>
            </div>
        </div>
    )
};

export default CountDown;