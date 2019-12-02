import React, { useState, useEffect } from 'react';
import {
    MONTH_OPTIONS,
    calculateDayOptions,
    getYearOptions
} from '../util/select-options';
import { getDayString } from '../util/helpers';

const WeekdayCalculator = () => {
    const [day, setDay] = useState('Select a day');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [dayOptions, setDayOptions] = useState([]);
    const [inputIsValid, setInputIsValid] = useState(false);
    const [result, setResult] = useState(null);

    useEffect(() => {
        const inputItems = [day, month, year];
        const inputItemsAreValid = inputItems.every(item => Boolean(item));

        setInputIsValid(inputItemsAreValid);
    }, [day, month, year]);

    useEffect(() => {
        setDayOptions(calculateDayOptions(month, year));
        console.log('Everytime', daysInMonth(month, year), Number(day));

        if (daysInMonth(month, year) < Number(day)) {
            setDay(String(daysInMonth(month, year)));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [month, year]);

    const daysInMonth = (month, year) => {
        return new Date(year, month, 0).getDate();
    };

    const handleDayChange = e => {
        setDay(e.target.value);
    };

    const handleMonthChange = e => {
        setMonth(e.target.value);
    };

    const handleYearChange = e => {
        setYear(e.target.value);
    };

    const getDayOfWeek = () => {
        const constructedDate = new Date(`${year}-${month}-${day}`);

        setResult(getDayString(constructedDate));
    };

    return (
        <div className="wd">
            <p>Enter your birth date below</p>
            <form className="wd-date-group">
                <div className="wd-field">
                    <div className="wd-field-select">
                        <select
                            className={
                                isNaN(Number(day))
                                    ? 'wd-selector wd-selector__disabled'
                                    : 'wd-selector'
                            }
                            onChange={handleDayChange}
                            name="day"
                        >
                            <option value={day} className="wd-option">
                                {day}
                            </option>
                            {dayOptions.map(item => (
                                <option
                                    value={item}
                                    key={item}
                                    className="wd-option"
                                >
                                    {item}
                                </option>
                            ))}
                        </select>
                    </div>
                    <label htmlFor="day">Day</label>
                </div>

                <div className="wd-field">
                    <div className="wd-field-select">
                        <select
                            className={
                                !month
                                    ? 'wd-selector wd-selector__disabled'
                                    : 'wd-selector'
                            }
                            onChange={handleMonthChange}
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
                    </div>
                    <label htmlFor="month">Month</label>
                </div>
                <div className="wd-field">
                    <div className="wd-field-select">
                        <select
                            className={
                                !year
                                    ? 'wd-selector wd-selector__disabled'
                                    : 'wd-selector'
                            }
                            onChange={handleYearChange}
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
                    <span className="wd-result_calculated">{result}</span>
                </h1>
            )}
        </div>
    );
};

export default WeekdayCalculator;
