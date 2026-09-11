import { useState } from "react";
import type { Task } from "../types/Task";
import Column from "../components/Column";
import TaskCard from "../components/TaskCard";

type TaskBoardPageProps = {
  tasks: Task[];
};

const TaskBoardPage = ({ tasks }: TaskBoardPageProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTasks = tasks.filter((task) => {
    const term = searchTerm.toLowerCase();
    return (
      task.title.toLowerCase().includes(term) ||
      task.description.toLowerCase().includes(term) ||
      task.category.toLowerCase().includes(term) ||
      task.assignee.toLowerCase().includes(term) ||
      task.priority.toLowerCase().includes(term)
    );
  });

  const todoTasks: Task[] = filteredTasks.filter(
    (task) => task.status === "todo",
  );
  const doingTasks: Task[] = filteredTasks.filter(
    (task) => task.status === "doing",
  );
  const doneTasks: Task[] = filteredTasks.filter(
    (task) => task.status === "done",
  );

  return (
        <main className="max-w-6xl mx-auto px-4 py-6 flex flex-col gap-8">
      <input
        type="text"
        placeholder="Sök task..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full max-w-md border border-stone-400 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Column title="Todo">
          {todoTasks.map((task) => (
            <TaskCard
              key={task.id}
              title={task.title}
              description={task.description}
              assignee={task.assignee}
              category={task.category}
              priority={task.priority}
              id={task.id}
            />
          ))}
        </Column>

        <Column title="Doing">
          {doingTasks.map((task) => (
            <TaskCard
              key={task.id}
              title={task.title}
              description={task.description}
              assignee={task.assignee}
              category={task.category}
              priority={task.priority}
              id={task.id}
            />
          ))}
        </Column>

        <Column title="Done">
          {doneTasks.map((task) => (
            <TaskCard
              key={task.id}
              title={task.title}
              description={task.description}
              assignee={task.assignee}
              category={task.category}
              priority={task.priority}
              id={task.id}
            />
          ))}
        </Column>
      </div>
    </main>
  );
};
export default TaskBoardPage;
