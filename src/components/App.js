import React from 'react';
import { CurrentTime } from './current-time';
import Sidebar from './sidebar';

const App = () => {
  return (
    <div className="root">
      <CurrentTime />
      <Sidebar />
    </div>
  );
};

export default App;
