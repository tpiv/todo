import './inputNumber.css'

export default function InputDate(props) {
    //логика, функция
    const {value, getValue} = {...props};
    function getVal(event) {
        let v = event.target.value;
        console.log(v);
        getValue(v);
    }
    return (
        <input type="number" value={value} onInput={getVal}/>
    )
}
