import React from 'react';
import './date-group.scss';

const DateGroup = ({ groupLabel, optionsData, handleDateChange }) => {
    return (
        <form className="dg-root">
            <fieldset>
                <legend className="dg-label">{groupLabel}</legend>
                <div className="dg-select_group">
                    <label className="dg-select_label">
                        <select
                            className="dg-select"
                            onChange={handleDateChange}
                            name="day"
                        >
                            <option value="">Select day</option>
                            {optionsData['days'].map((day, index) => (
                                <option value={day} key={index}>
                                    {day}
                                </option>
                            ))}
                        </select>
                    </label>
                    <div className="dg-divider" />

                    <label className="dg-select_label">
                        <select
                            className="dg-select"
                            onChange={handleDateChange}
                            name="month"
                        >
                            <option value="">Select month</option>
                            {optionsData['months'].map(month => (
                                <option value={month.num} key={month.str}>
                                    {month.str}
                                </option>
                            ))}
                        </select>
                    </label>
                    <div className="dg-divider" />

                    <label className="dg-select_label">
                        <select
                            className="dg-select"
                            onChange={handleDateChange}
                            name="year"
                        >
                            <option value="">Select year</option>
                            {optionsData['years'].map((year, index) => (
                                <option value={year} key={index}>
                                    {year}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>
            </fieldset>
        </form>
    );
};

export default DateGroup;
