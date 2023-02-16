import React from "react";
import "./index.css";

const Bar = ({ day, amount, isToday }) => {
    return (
        <div className="bar">
            <div className="bar-figure">
                <p style={{bottom: `${(amount * 1.5) + 6}%`}} className="amount">${amount}</p>
                <span
                    style={{
                        height: `${amount * 1.5}%`, // Dynamiclly sets the height according to the amount
                    }}
                    className={`${isToday ? 'today-bar' : 'normal-bar'}`}
                ></span>
            </div>
            <span className="day">{day}</span>
        </div>
    );
};

export default Bar;
