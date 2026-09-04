import { useState } from "react";
import type { TaskCategory, TaskPriority } from "../types/Task";

const NewTaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [category, setCategory] = useState<TaskCategory | "">("");
  const [priority, setPriority] = useState<TaskPriority | "">("");

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("New Task:", {
      title,
      description,
      assignee,
      category,
      priority,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Titel:</label>
      <input
        type="text"
        id="title"
        required
        placeholder="Enter task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="description">Beskrivning:</label>
      <textarea
        id="description"
        required
        placeholder="Enter task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <label htmlFor="assignee">Ansvarig:</label>
      <input
        type="text"
        id="assignee"
        required
        placeholder="Enter assignee name"
        value={assignee}
        onChange={(e) => setAssignee(e.target.value)}
      />

      <label htmlFor="category">Kategori:</label>
      <select
        id="category"
        required
        value={category}
        onChange={(e) => setCategory(e.target.value as TaskCategory)}
      >
        <option value="">Välj kategori</option>
        <option value="Frontend">Frontend</option>
        <option value="Testing">Testing</option>
        <option value="Design">Design</option>
        <option value="API">API</option>
      </select>

      <label htmlFor="priority">Prioritet:</label>
      <select
        id="priority"
        required
        value={priority}
        onChange={(e) => setPriority(e.target.value as TaskPriority)}
      >
        <option value="">Välj prioritet</option>
        <option value="Låg">Låg</option>
        <option value="Medium">Medium</option>
        <option value="Hög">Hög</option>
      </select>

      <button type="submit">Skapa uppgift</button>
    </form>
  );
};
export default NewTaskForm;
