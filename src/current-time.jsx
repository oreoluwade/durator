import React, { useState, useEffect } from 'react';
import { calculateMoment } from './util/helpers';

export const CurrentTime = () => {
    const [dateTime, setDateTime] = useState(null);

    useEffect(() => {
        let interval = null;
        interval = setInterval(() => {
            setDateTime(calculateMoment());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return dateTime ? (
        <div className="ct">
            <p className="ct__time">{dateTime.time}</p>
            <p className="ct__date">
                {dateTime.day}
                {dateTime.suffix} {dateTime.month}, {dateTime.year}
            </p>
        </div>
    ) : null;
};
