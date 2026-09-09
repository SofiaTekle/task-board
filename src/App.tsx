import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskCard from "./components/TaskCard";
import Column from "./components/Column";
import type { Task, NewTask } from "./types/Task";
import NewTaskForm from "./components/NewTaskForm";
import { useState } from "react";

const initialTasks: Task[] = [
  {
    id: 1,
    title: "Skapa dashboard",
    description: "Gör en dashboard för att visa data",
    assignee: "Anna",
    category: "Frontend",
    priority: "Hög",
    status: "todo",
  },
  {
    id: 2,
    title: "Skriva dokumentation",
    description: "Skriv dokumentation för projektet",
    assignee: "Sofia",
    category: "Design",
    priority: "Låg",
    status: "doing",
  },
  {
    id: 3,
    title: "Skriva tester",
    description: "Skriv tester för projektet",
    assignee: "Erik",
    category: "Testing",
    priority: "Medium",
    status: "done",
  },
  {
    id: 4,
    title: "Implementera autentisering",
    description: "Implementera autentisering med JWT",
    assignee: "Lina",
    category: "API",
    priority: "Hög",
    status: "todo",
  },
  {
    id: 5,
    title: "Skapa API-dokumentation",
    description: "Skapa dokumentation för API:et",
    assignee: "David",
    category: "API",
    priority: "Medium",
    status: "doing",
  },
  {
    id: 6,
    title: "Designa användargränssnitt",
    description: "Designa användargränssnittet för applikationen",
    assignee: "Emma",
    category: "Design",
    priority: "Låg",
    status: "done",
  },
  {
    id: 7,
    title: "Optimera prestanda",
    description: "Optimera prestanda för applikationen",
    assignee: "Oscar",
    category: "Frontend",
    priority: "Hög",
    status: "todo",
  },
  {
    id: 8,
    title: "Skriva enhetstester",
    description: "Skriv enhetstester för applikationen",
    assignee: "Maja",
    category: "Testing",
    priority: "Medium",
    status: "doing",
  },
  {
    id: 9,
    title: "Implementera push-notiser",
    description: "Implementera push-notiser för applikationen",
    assignee: "Felix",
    category: "Frontend",
    priority: "Låg",
    status: "done",
  },
];

const App = () => {
  const [taskId, setTaskId] = useState<number>(initialTasks.length + 1);
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [searchTerm, setSearchTerm] = useState("");

  const addTask = (newTask: NewTask) => {
    const taskToAdd: Task = {
      id: taskId,
      status: "todo",
      ...newTask,
    };
    setTaskId(taskId + 1);
    setTasks([...tasks, taskToAdd]);
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
