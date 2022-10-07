import React, {useState, useEffect, useRef} from "react";
import "./CountDown.css";

const CountDown = () => {
    const countDownValue = 900000; // 暫時先15分鐘
    const [countDown, setCountDown] = useState(new Date(countDownValue));
    
    useEffect(() => {
        let interval = setInterval(() => {
            setCountDown(new Date(countDown.getTime()-1000))
        }, 1000);

        if (countDown.getTime() <=  0){
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