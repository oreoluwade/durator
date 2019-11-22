import React, { useState, useEffect } from 'react';
import { calculateMoment } from './util/helpers';

export const CurrentTime = () => {
    const [dateTime, setDateTime] = useState({});

    useEffect(() => {
        let interval = null;
        interval = setInterval(() => {
            setDateTime(calculateMoment());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="ct">
            <p className="ct__time">{dateTime.time}</p>
            <p className="ct__date">{dateTime.date}</p>
        </div>
    );
};
