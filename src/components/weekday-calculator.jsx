import React, { useState } from 'react';
import { MONTH_OPTIONS } from '../util/select-options';

const WeekdayCalculator = () => {
  const [date, setDate] = useState({ day: '', month: '', year: '' });

  const handleInputChange = e => {
    e.persist();
    const newDate = Object.assign({}, date, {
      [e.target.name]: e.target.value
    });
    setDate(newDate);
    console.log('Date', date);
  };

  return (
    <div className="wd">
      <p>Enter your birth date below</p>
      <form className="wd-date-group">
        <div className="wd-field">
          <select className="wd-month-selector">
            {MONTH_OPTIONS.map((mo, index) => (
              <option value="mo" key={index} className="wd-option">
                {mo}
              </option>
            ))}
          </select>
          <label htmlFor="month">Month</label>
        </div>
        <div className="wd-field">
          <input
            className="wd-input"
            type="text"
            value={date.day}
            name="day"
            onChange={handleInputChange}
          />
          <label htmlFor="day">Day</label>
        </div>
        <div className="wd-field">
          <input
            className="wd-input"
            type="text"
            value={date.year}
            name="year"
            onChange={handleInputChange}
          />
          <label htmlFor="year">Year</label>
        </div>
        <button type="button" className="wd-submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default WeekdayCalculator;
