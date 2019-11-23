import React, { useState, useEffect, Fragment } from 'react';
import { calculateMoment } from '../util/helpers';

export const CurrentTime = () => {
  const [dateTime, setDateTime] = useState(null);

  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      setDateTime(calculateMoment());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ct">
      {dateTime && (
        <Fragment>
          <p className="ct__time">{dateTime.time}</p>
          <p className="ct__date">
            {dateTime.day}
            {dateTime.suffix} {dateTime.month}, {dateTime.year}
          </p>
          <p className="ct__weekday">{dateTime.dayOfWeek}</p>
        </Fragment>
      )}
    </div>
  );
};
