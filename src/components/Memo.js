import React, { useState, useMemo } from 'react';

const Memo = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const AddCount1 = () => {
        setCount1(prevCount1 => prevCount1 + 1);
    }

    const AddCount2 = () => {
        setCount2(prevCount2 => prevCount2 + 1);
    }

    // const isOdd = () => {
    //     let i = 0;
    //     while (i < 500000000) i++;  // 擬似的に重たい計算とする
    //     return count1 % 2 == 1;
    // }

    const isOdd = useMemo(() => {
        let i = 0;
        while (i < 500000000) i++;  // 擬似的に重たい計算とする
        return count1 % 2 === 1;
    }, [count1]);

    return (
        <div>
            <button type='button' onClick={AddCount1}>Count1: {count1}</button>
            <br />
            <span>{isOdd ? 'Odd Number' : 'Even Number'}</span>
            <br />
            <button type='button' onClick={AddCount2}>Count2: {count2}</button>
        </div>
    )
}

export default Memo
