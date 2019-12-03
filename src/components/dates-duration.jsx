import React, { useState, useEffect } from 'react'; // useState
import {
    MONTH_OPTIONS,
    calculateDayOptions,
    getYearOptions
} from '../util/select-options';
import DateGroup from './date_group';

const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;

const DatesDuration = () => {
    const [optionsDataOne, setOptionsDataOne] = useState({
        days: [],
        months: [],
        years: []
    });

    const [optionsDataTwo, setOptionsDataTwo] = useState({
        days: [],
        months: [],
        years: []
    });

    const [startDate, setStartDate] = useState({
        day: '',
        month: '',
        year: ''
    });
    const [endDate, setEndDate] = useState({ day: '', month: '', year: '' });
    const [disabled, setDisabled] = useState(true);
    const [daysDifference, setDaysDifference] = useState('');

    useEffect(() => {
        setOptionsDataOne({
            days: calculateDayOptions('', ''),
            months: MONTH_OPTIONS,
            years: getYearOptions()
        });
        setOptionsDataTwo({
            days: calculateDayOptions('', ''),
            months: MONTH_OPTIONS,
            years: getYearOptions()
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (allTargetsFilled(startDate) && allTargetsFilled(endDate)) {
            setDisabled(false);
        }
    }, [startDate, endDate]);

    const handleStartDateChange = e => {
        setStartDate({ ...startDate, [e.target.name]: e.target.value });
    };

    const handleEndDateChange = e => {
        setEndDate({ ...endDate, [e.target.name]: e.target.value });
    };

    const getUTCTime = a => {
        // a is Date object
        return Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    };

    const getDuration = e => {
        e.preventDefault();
        const startDateObject = new Date(
            `${startDate.year}-${startDate.month}-${startDate.day}`
        );
        const endDateObject = new Date(
            `${endDate.year}-${endDate.month}-${endDate.day}`
        );

        const utc1 = getUTCTime(startDateObject);
        const utc2 = getUTCTime(endDateObject);

        const epoch = (utc1 - utc2) / MILLISECONDS_PER_DAY;

        console.log('Epoch', epoch, 1);

        if (Math.abs(epoch / 365) > 1) {
            const daysAfterExtractingYears = Math.abs(epoch % 365);
            console.log(daysAfterExtractingYears, epoch / 365);
            if (daysAfterExtractingYears < 30) {
                const monthsInRemainingDays = Math.abs(
                    Math.floor(daysAfterExtractingYears / 30)
                );
                const daysRemaining = daysAfterExtractingYears % 30;
                setDaysDifference(
                    `${Math.floor(
                        Math.abs(epoch / 365)
                    )} years, ${monthsInRemainingDays} months, ${daysRemaining} days`
                );
            } else {
                setDaysDifference(
                    `${Math.floor(
                        Math.abs(epoch / 365)
                    )} months, ${daysAfterExtractingYears} days`
                );
            }
        } else {
            setDaysDifference(`${Math.floor(Math.abs(epoch))} days`);
        }

        // setDaysDifference(Math.abs(difference));
    };

    const allTargetsFilled = obj => {
        return Object.values(obj).every(item => Boolean(item));
    };

    return (
        <div className="dd-root">
            <button
                onClick={getDuration}
                type="button"
                className="dd-submit"
                disabled={disabled}
            >
                Calculate Duration
            </button>
            <div className="dd-dates">
                <DateGroup
                    groupLabel="Start Date"
                    optionsData={optionsDataOne}
                    handleDateChange={handleStartDateChange}
                />
                <div className="dd-epoch_divider" />
                <DateGroup
                    groupLabel="End Date"
                    optionsData={optionsDataTwo}
                    handleDateChange={handleEndDateChange}
                />
            </div>
            {daysDifference && <h1>{daysDifference}</h1>}
        </div>
    );
};

export default DatesDuration;
