import React, { useState } from "react";
import "../style/inbox.css";

function ChienNguyen() {
    // Good job
    const [leftText, setLeftText] = useState();
    const [rightText, setRightText] = useState();

    const moveToLeft = () => {
        setLeftText(rightText);
        setRightText('');
    };

    const moveToRight = () => {
        setRightText(leftText);
        setLeftText('');
    };
    return (
        <div className="container">
            <div className="input-container">
                <input
                    className="input-field"
                    type="text"
                    value={leftText}
                    onChange={(e) => setLeftText(e.target.value)}
                />
                <button className="move-button" onClick={moveToRight}>Move to right</button>
            </div>
            <div className="input-container">
                <button className="move-button" onClick={moveToLeft}>Move to left</button>
                <input
                    className="input-field"
                    type="text"
                    value={rightText}
                    onChange={(e) => setRightText(e.target.value)}
                />

            </div>
        </div>
    )
}
export default ChienNguyen;