import React from 'react';
import { Router } from '@reach/router';
import Home from './home';
import WeekdayCalculator from './weekday-calculator';
import DatesDuration from './dates-duration';

const App = () => {
    return (
        <Router>
            <Home path="/" />
            <WeekdayCalculator path="/weekday-calculator" />
            <DatesDuration path="/dates-duration" />
        </Router>
    );
};

export default App;
