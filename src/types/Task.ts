export type TaskStatus = "todo" | "doing" | "done";
export type TaskCategory = "Frontend" | "Testing" | "Design" | "API";
export type TaskPriority = "Låg" | "Medium" | "Hög";

export type Task = {
    id: number;
    title: string;
    description: string;
    assignee: string;
    category: TaskCategory;
    priority: TaskPriority;
    status: TaskStatus;
}