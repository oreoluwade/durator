import React from 'react';
import { Link } from '@reach/router';

const Sidebar = () => {
    return (
        <aside className="sb">
            <Link to="/weekday-calculator" className="button sb__wd">
                What day of the week was I born?
            </Link>
            <Link to="/dates-duration" className="button sb__wd">
                Get duration between dates
            </Link>
        </aside>
    );
};

export default Sidebar;
