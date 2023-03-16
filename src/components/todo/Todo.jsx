import './todo.css'
import TodoList from '../todoList/TodoList';
import { useState } from 'react';

let numbers = [{id:1, text: "Выпить", checked: false}, {id:2, text: "Закусить", checked: false}, {id:3, text: "Покурить", checked: false}];
export default function InputDate() {
    //логика, функция
    const [tasks, setTasks] = useState(numbers);
    function add () {
        let id = numbers[numbers.length-1].id + 1;
        setTasks([...tasks, {id: id, text: "", checked: false}]);
    }
    return (
        <div className='wrap'>
            <button className="but" onClick={add}>Добавить заметку</button>
            {
                tasks.map(t=>
                <TodoList
                    key={t.id}
                    elem={t}
                    tasks={tasks}
                    setTasks={setTasks}
                />
                )
            }
        </div>
    )
}
