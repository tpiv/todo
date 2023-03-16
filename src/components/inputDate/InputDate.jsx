import React from 'react'
import './inputDate.css'

export default function InputDate(props) {
    //логика, функция
    const {value1, value2, valueData} = {...props};
    function getVal() {
        // console.log("value1", value1);
        // console.log("value2", value2);
    }
    getVal();
    function showInp() {
        console.log(valueData.current.value);
    }
    return (
        <div className='button'>
            <input type="date" onInput={showInp} ref={valueData}/>
        </div>
    )
}
