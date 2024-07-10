import React, { useState, useEffect } from 'react';

function DateDisplay() {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalID);
        }
    }, []);

    function formatDate() {
        let day = date.getDate();
        let month = date.getMonth() + 1; // Months are zero-indexed
        let year = date.getFullYear();
        day = day < 10 ? '0' + day : day;
        month = month < 10 ? '0' + month : month;
        return month + '/' + day + '/' + year;
    }

    return (
        <div className="date-container">
            <div className="date">
                <span>{formatDate()}</span>
            </div>
        </div>
    );
}

export default DateDisplay;
