import React from 'react'
import './button.css'

export default function Button(props) {
    const {text} = {...props};
    //логика, функция
    const start = (event)=> {
        // console.log(event);
        event.preventDefault();
    }
    React.useEffect(()=>{
        // console.log("dddfjjfh");
    });
    return (
        <div className='button'>
            <button onClick={start}>{text}</button>
        </div>
    )
}
