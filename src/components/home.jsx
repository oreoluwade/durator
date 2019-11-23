import React from 'react';
import { CurrentTime } from './current-time';
import Sidebar from './sidebar';

const Home = () => {
  return (
    <div className="root" path="/">
      <CurrentTime />
      <Sidebar />
    </div>
  );
};

export default Home;
