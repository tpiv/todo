import './todoList.css'

export default function InputDate(props) {
    //логика, функция
    const {elem, tasks, setTasks} = {...props};

    function textTask (event) {
        setTasks(tasks.map((obj) => {
            if(elem.id===obj.id) {
                obj.text=event.target.value;
            }
            return obj;
        }));
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
        console.log(event.target.id);
    }
    return (
        <div className='count'>
        <div><input type="checkbox" name="ok" onChange={checked} /></div>
        <div><input type="text" className='wi' value={elem.text} onChange={textTask} /></div>
        <div><button onClick={delTask}>Удалить</button></div>
        </div>
    )
}
