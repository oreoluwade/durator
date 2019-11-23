import React from 'react';
import { Router } from '@reach/router';
import Home from './home';
import WeekdayCalculator from './weekday-calculator';

const App = () => {
  return (
    <Router>
      <Home path="/" />
      <WeekdayCalculator path="/weekday-calculator" />
    </Router>
  );
};

export default App;
