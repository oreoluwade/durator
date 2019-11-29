import React, { useState, useEffect } from 'react';
import {
    MONTH_OPTIONS,
    getDayOptions,
    getYearOptions
} from '../util/select-options';
import { checkYearValidity, getDayString } from '../util/helpers';

const WeekdayCalculator = () => {
    const [date, setDate] = useState({ day: '', month: '', year: '' });
    const [inputIsValid, setInputIsValid] = useState(false);
    const [result, setResult] = useState(null);

    useEffect(() => {
        const inputItemsAreValid = Object.values(date).every(item =>
            Boolean(item)
        );

        setInputIsValid(inputItemsAreValid);
    }, [date]);

    const handleInputChange = e => {
        e.persist();
        const numOfCharsIsValid = e.target.value.length <= 4;

        if (
            e.target.name === 'year' &&
            !checkYearValidity(e.target.value) &&
            numOfCharsIsValid
        ) {
            return setDate({
                ...date,
                year: e.target.value.slice(0, e.target.value.length - 1)
            });
        } else {
            if (numOfCharsIsValid) {
                setDate({ ...date, [e.target.name]: e.target.value });
                console.log('Date', date);
            }
        }
    };

    const getDayOfWeek = () => {
        const constructedDate = new Date(
            `${date.year}-${date.month}-${date.day}`
        );

        setResult(getDayString(new Date(constructedDate)));
    };

    return (
        <div className="wd">
            <p>Enter your birth date below</p>
            <form className="wd-date-group">
                <div className="wd-field">
                    <div className="wd-field-select">
                        <select
                            className={
                                !date.day
                                    ? 'wd-selector wd-selector__disabled'
                                    : 'wd-selector'
                            }
                            onChange={handleInputChange}
                            name="day"
                            disabled={!date.month}
                        >
                            <option value="" className="wd-option">
                                Select a day
                            </option>
                            {getDayOptions(date.month, date.year).map(day => (
                                <option
                                    value={day}
                                    key={day}
                                    className="wd-option"
                                >
                                    {day}
                                </option>
                            ))}
                        </select>
                        {/* <img
                            src="/expand.png"
                            alt="expand"
                            className="wd-field-select-expand"
                        /> */}
                    </div>
                    <label htmlFor="day">Day</label>
                </div>

                <div className="wd-field">
                    <div className="wd-field-select">
                        <select
                            className={
                                !date.month
                                    ? 'wd-selector wd-selector__disabled'
                                    : 'wd-selector'
                            }
                            onChange={handleInputChange}
                            name="month"
                        >
                            <option value="" className="wd-option">
                                Select a month
                            </option>
                            {MONTH_OPTIONS.map(mo => (
                                <option
                                    value={mo.num}
                                    key={mo.str}
                                    className="wd-option"
                                >
                                    {mo.str}
                                </option>
                            ))}
                        </select>
                        {/* <img
                            src="/expand.png"
                            alt="expand"
                            className="wd-field-select-expand"
                        /> */}
                    </div>
                    <label htmlFor="month">Month</label>
                </div>
                <div className="wd-field">
                    <div className="wd-field-select">
                        <select
                            className={
                                !date.year
                                    ? 'wd-selector wd-selector__disabled'
                                    : 'wd-selector'
                            }
                            onChange={handleInputChange}
                            name="year"
                        >
                            <option value="" className="wd-option">
                                Select a year
                            </option>
                            {getYearOptions().map(year => (
                                <option
                                    value={year}
                                    key={year}
                                    className="wd-option"
                                >
                                    {year}
                                </option>
                            ))}
                        </select>
                        {/* <img
                            src="/expand.png"
                            alt="expand"
                            className="wd-field-select-expand"
                        /> */}
                    </div>
                    <label htmlFor="year">Year</label>
                </div>

                <button
                    type="button"
                    className="wd-submit"
                    onClick={getDayOfWeek}
                    disabled={!inputIsValid}
                >
                    SUBMIT
                </button>
            </form>

            {result && (
                <h1 className="wd-result">
                    You were born on a{' '}
                    <span className="wd-result_calculated">Friday</span>
                </h1>
            )}
        </div>
    );
};

export default WeekdayCalculator;
