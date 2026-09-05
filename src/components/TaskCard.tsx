import type { TaskCategory, TaskPriority } from "../types/Task";

export type TaskCardProps = {
  id: number;
  title: string;
  description: string;
  assignee: string;
  category: TaskCategory;
  priority: TaskPriority;
};

const priorityStyles: Record<TaskPriority, string> = {
    "Låg": "bg-green-100 text-green-700",
    "Medium": "bg-yellow-100 text-yellow-700",
    "Hög": "bg-red-100 text-red-700",
};


const TaskCard = ({
  id: _id,
  title,
  description,
  assignee,
  category,
  priority,
}: TaskCardProps) => {

  return (
    <article className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex flex-col gap-2 ">
      <h3 className="text-base font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      <p className="text-sm text-gray-500">Ansvarig: {assignee}</p>
      <div className="flex gap-2 mt-1">
        <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700">
          {category}
        </span>
        <span
          className={`text-xs px-2 py-1 rounded-full ${priorityStyles[priority]}`}
        >
          {priority}
        </span>
      </div>
    </article>
  );
};
export default TaskCard;
