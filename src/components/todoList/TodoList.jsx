import styles from './todoList.module.css';


export default function InputDate(props) {

    const { elem, tasks, setTasks } = { ...props };

    function textTask(event) {
        setTasks(
            tasks.map((task) => {
                if (elem.id === task.id) {
                    task.text = event.target.value;
                }
                return task;
            })
        );
    }

    function delTask() {
        setTasks(tasks.filter(task => task.id !== elem.id));
    }

    function checked() {
        setTasks(
            tasks.map((task) => {
                if (elem.id === task.id) {
                    task.checked = !task.checked;
                }
                return task;
            })
        );
    }

    return (
        <div className={!elem.checked ? styles.countTrue : styles.countFalse}>
            <div>
                <input type="checkbox" name={styles.ok} onChange={checked} />
            </div>
            <div>
                <input type="text" className={styles.wi} value={elem.text} onChange={textTask} />
            </div>
            <div>
                <button onClick={delTask}>Удалить</button>
            </div>
        </div>
    )
}
