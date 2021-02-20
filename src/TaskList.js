import './TaskList.css';
import TaskCard from './TaskCard.js';

function TaskList(props) {
    return (
        <ul className="task-list">
            <TaskCard />
        </ul>
    );
}

export default TaskList;
