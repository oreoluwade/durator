import React, { useState } from 'react';

const DatesDuration = () => {
    const [startDate, setStartDate] = useState({
        year: '',
        month: '',
        day: ''
    });
    const [endDate, setEndDate] = useState({ year: '', month: '', day: '' });

    const handleStartDate = e => {
        console.log('START', e.target.value);
    };

    const handleEndDate = e => {
        console.log('END', e.target.value);
    };

    return (
        <div className="dd">
            <div className="dd-epoch">
                <p className="dd-epoch_title">Start Date</p>
                <div className="dd-epoch__input_group">
                    <input
                        type="text"
                        className="dd-epoch_input dd-epoch_input__year"
                        value={startDate.year}
                        onChange={handleStartDate}
                    />
                    <span className="dd-epoch_divider">-</span>
                    <input
                        type="text"
                        className="dd-epoch_input"
                        value={startDate.month}
                        onChange={handleStartDate}
                    />
                    <span className="dd-epoch_divider">-</span>
                    <input
                        type="text"
                        className="dd-epoch_input"
                        value={startDate.day}
                        onChange={handleStartDate}
                    />
                </div>
            </div>
            <div className="dd-divider" />
            <div className="dd-epoch">
                <p className="dd-epoch_title">End Date</p>
                <div className="dd-epoch__input_group">
                    <input
                        type="text"
                        className="dd-epoch_input dd-epoch_input__year"
                        value={endDate.month}
                        onChange={handleEndDate}
                    />
                    <span className="dd-epoch_divider">-</span>
                    <input
                        type="text"
                        className="dd-epoch_input"
                        value={endDate.month}
                        onChange={handleEndDate}
                    />
                    <span className="dd-epoch_divider">-</span>
                    <input
                        type="text"
                        className="dd-epoch_input"
                        value={endDate.month}
                        onChange={handleEndDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default DatesDuration;
