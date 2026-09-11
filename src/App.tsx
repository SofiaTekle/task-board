import Header from "./components/Header";
import Footer from "./components/Footer";
import type { Task, NewTask } from "./types/Task";
import { useEffect, useState } from "react";
import TaskBoardPage from "./pages/TaskBoardPage";
import CreateTaskPage from "./pages/CreateTaskPage";
import { Route, Routes } from "react-router";

const apiUrl = "http://localhost:3001/api/tasks";

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

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

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<TaskBoardPage tasks={tasks} />} />
        <Route
          path="/create"
          element={<CreateTaskPage onAddTask={addTask} />}
        />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
