import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskCard from "./components/TaskCard";
import Column from "./components/Column";
import type { Task, NewTask } from "./types/Task";
import NewTaskForm from "./components/NewTaskForm";
import { useEffect, useState } from "react";

const apiUrl = "http://localhost:3001/api/tasks";

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchTasks = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Kunde inte hämta tasks");
      }
      const result: Task[] = await response.json();
      setTasks(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const executeFetch = async () => {
      await fetchTasks();
    };
    executeFetch();
  }, []);

  const addTask = async (newTask: NewTask) => {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });
      if (!response.ok) {
        throw new Error("Kunde inte skapa task");
      }
    } catch (error) {
      console.log(error);
    }

    await fetchTasks();
  };

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
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-6 flex flex-col gap-8">
        <section>
          <NewTaskForm onAddTask={addTask} />
        </section>

        <input
          type="text"
          placeholder="Sök task..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md border border-stone-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
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

      <Footer />
    </>
  );
};

export default App;
