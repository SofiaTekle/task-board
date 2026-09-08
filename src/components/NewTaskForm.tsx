import { useState } from "react";
import type { NewTask, TaskCategory, TaskPriority } from "../types/Task";

type NewTaskFormProps = {
  onAddTask: (task: NewTask) => void;
};

const NewTaskForm = ({ onAddTask }: NewTaskFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [category, setCategory] = useState<TaskCategory | "">("");
  const [priority, setPriority] = useState<TaskPriority | "">("");

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!category || !priority) return;

    onAddTask({
      title,
      description,
      assignee,
      category,
      priority,
    });

    setTitle("");
    setDescription("");
    setAssignee("");
    setCategory("");
    setPriority("");
  };

  const inputStyles =
    "w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400";
  const labelStyles = "text-sm font-medium text-gray-700";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex flex-col gap-4 max-w-xl"
    >
      <h2 className="text-xl font-semibold text-gray-800">Skapa ny task</h2>

      <div className="flex flex-col gap-1">
        <label htmlFor="title" className={labelStyles}>
          Titel:
        </label>
        <input
          type="text"
          id="title"
          required
          placeholder="Skriv en titel"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={inputStyles}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="description" className={labelStyles}>
          Beskrivning:
        </label>
        <textarea
          id="description"
          required
          placeholder="Beskriv uppgiften..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={`${inputStyles} resize-none h-24`}
        ></textarea>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="assignee" className={labelStyles}>
          Ansvarig:
        </label>
        <input
          type="text"
          id="assignee"
          required
          placeholder="Ange ansvarig person"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
          className={inputStyles}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-1 flex-1">
          <label htmlFor="category" className={labelStyles}>
            Kategori:
          </label>
          <select
            id="category"
            required
            value={category}
            onChange={(e) => setCategory(e.target.value as TaskCategory)}
            className={inputStyles}
          >
            <option value="">Välj kategori</option>
            <option value="Frontend">Frontend</option>
            <option value="Testing">Testing</option>
            <option value="Design">Design</option>
            <option value="API">API</option>
          </select>
        </div>

        <div className="flex flex-col gap-1 flex-1">
          <label htmlFor="priority" className={labelStyles}>
            Prioritet:
          </label>
          <select
            id="priority"
            required
            value={priority}
            onChange={(e) => setPriority(e.target.value as TaskPriority)}
            className={inputStyles}
          >
            <option value="">Välj prioritet</option>
            <option value="Låg">Låg</option>
            <option value="Medium">Medium</option>
            <option value="Hög">Hög</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md px-4 py-2 transition-colors cursor-pointer self-start"
      >
        Skapa uppgift
      </button>
    </form>
  );
};
export default NewTaskForm;
