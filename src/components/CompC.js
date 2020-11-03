import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';

const CompC = () => {
    const { dispatchProvided } = useContext(AppContext);

    return (
        <div>
            <button type='button' onClick={() => dispatchProvided('add_1')}>+1</button>
        </div>
    )
}

export default CompC
