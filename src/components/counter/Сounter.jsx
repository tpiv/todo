import './counter.css'
import { useState } from 'react';

export default function InputDate() {
    //логика, функция
    const [value, getValue] = useState(0);
    function minus () {
        if(value !== 0) {
            getValue((prev) => prev - 1);
        }
    }

    return (
        <div className='wrap'>
            <div>{value}</div>
            <div className='count'>
                <input type="button" value="+" onClick={() => getValue((prev) => prev + 1)} />
                <input type="button" value="-" onClick={minus} />
            </div>
        </div>
    )
}
