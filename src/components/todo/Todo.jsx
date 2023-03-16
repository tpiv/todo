import './todo.css'
import { useRef, useState } from 'react';

export default function InputDate() {
    //логика, функция
    const color = useRef();
    let numbers = ["Выпить", "Закусить", "Поиграть в Postal 2", "Набить морду страусу", "покурить"];
    const [tasks, setTasks] = useState(numbers);
    function add () {
        setTasks([...tasks, ""]);
    }
    function textTask (event) {
        // console.log(event);
        let mass = Array.from(tasks);
        mass[event.target.id] = event.target.value;
        setTasks(mass);
    }
    function delTask (event) {
        console.log(event.target.id);
        let id = parseInt(event.target.id);
        let mass = [];
        for(let i=0; i < tasks.length; i++) {
            if(i !== id) {
                mass.push(tasks[i]);
            }
        }
        setTasks(mass);
    }
    function checked(event) {
        // console.log(event.target);
        if(event.target.checked) {
            //сделать цвет зеленым
            // console.log(color.current);
            color.current.setAttribute("style", "color: green;");
        }
        else {
            //сделать цвет обычным
            // console.log(color.current);
            color.current.setAttribute("style", "color: black;");
        }
    }

    return (
        <div className='wrap'>
            <button className="but" onClick={add}>Добавить заметку</button>
            {
                tasks.map((num, index)=>(
                <div className='count' key={index}>
                <div><input type="checkbox" name="ok" onChange={checked} /></div>
                <div><input ref={color} type="text" className='wi' id={index} value={num} onChange={textTask} /></div>
                <div><button onClick={delTask} id={index}>Удалить</button></div>
                </div>
                ))
            }
        </div>
    )
}
