import React, {useState, useEffect} from 'react';

function DigitalClock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
        setTime(new Date());
    }, 1000);

    return () => {
        clearInterval(intervalID);
    }
    }, []);

    function formatTime(){

        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let amOrPm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12
        hours = hours ? hours : 12;
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        return hours + ':' + minutes + ':' + seconds + ' ' + amOrPm;
    }
    return(<>
    <div className="clock-container">

        <div className="clock">
            <span>{formatTime()}</span>
        </div>



    </div>
    </>);
}

export default DigitalClock