import React, { useState, useEffect } from 'react';
import { calculateMoment } from './util/helpers';

export const CurrentTime = () => {
    const [dateTime, setDateTime] = useState({});

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        setDateTime(calculateMoment());
    });

    return (
        <div className="ct">
            <p className="ct__time">{dateTime.time}</p>
            <p className="ct__date">{dateTime.date}</p>
        </div>
    );
};
