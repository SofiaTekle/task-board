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
    "Låg": "bg-emerald-50 text-emerald-700",
    "Medium": "bg-amber-50 text-amber-700",
    "Hög": "bg-rose-50 text-rose-700",
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
    <article className="bg-white rounded-lg border border-stone-200 p-4 flex flex-col gap-2">
      <h3 className="text-base font-semibold text-stone-900">{title}</h3>
      <p className="text-sm text-stone-600">{description}</p>
      <p className="text-sm text-stone-500">Ansvarig: {assignee}</p>
      <div className="flex gap-2 mt-1">
        <span className="text-xs px-2 py-1 rounded-md bg-stone-200 text-stone-600">
          {category}
        </span>
        <span className={`text-xs px-2 py-1 rounded-md ${priorityStyles[priority]}`}>
          {priority}
        </span>
      </div>
    </article>
  );
};
export default TaskCard;