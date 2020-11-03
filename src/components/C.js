import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';

const C = () => {
    const value = useContext(AppContext);

    return (
        <div>
            <h3>This is C</h3>
            {value}
        </div>
    )
}

export default C
