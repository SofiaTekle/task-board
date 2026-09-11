import { useNavigate } from "react-router";
import NewTaskForm from "../components/NewTaskForm";
import type { NewTask } from "../types/Task";

type CreateTaskPageProps = {
  onAddTask: (task: NewTask) => Promise<void>;
};

const CreateTaskPage = ({ onAddTask }: CreateTaskPageProps) => {
  const navigate = useNavigate();

  const executeOnAddTask = async (newTask: NewTask) => {
    await onAddTask(newTask);
    navigate("/");
  };

  return (
    <main className="max-w-2xl mx-auto px-4 py-6">
      <section>
    <h1 className="text-2xl font-bold text-stone-900 mb-6">Skapa ny task</h1>
        <NewTaskForm onAddTask={executeOnAddTask} />
      </section>
    </main>
  );
};

export default CreateTaskPage;
