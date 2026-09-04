import type { TaskCategory, TaskPriority } from "../types/Task";

export type TaskCardProps = {
    id: number;
    title: string;
    description: string;
    assignee: string;
    category: TaskCategory;
    priority: TaskPriority;
}

const TaskCard = ({id: _id, title, description, assignee, category, priority}: TaskCardProps) => {
    return (
            <article className="task-card">
                <h3>{title}</h3>
                <p>{description}</p>
                <p>Ansvarig: {assignee}</p>
                <p className="category">{category}</p>
                <p className={`priority priority-${priority}`}>{priority}</p>
            </article>
    );
};
export default TaskCard;