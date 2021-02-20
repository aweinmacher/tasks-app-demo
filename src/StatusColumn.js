import './StatusColumn.css';
import TaskList from './TaskList.js';
import AddTaskBtn from './AddTaskBtn.js';

function StatusColumn(props) {
    return (
        <li className="status-column">
            {props.title}
            <TaskList />
            <AddTaskBtn />
        </li>
    );
}

export default StatusColumn;
