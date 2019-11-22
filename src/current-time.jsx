import React from 'react';
import { getDateTime } from './util/helpers';

export const CurrentTime = () => {
    return (
        <div>
            <h1>{getDateTime().date}</h1>
            <h4>{getDateTime().time}</h4>
        </div>
    );
};
