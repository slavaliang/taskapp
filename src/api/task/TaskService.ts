import $api from "..";
import { Task, TaskState } from "../../types/task/taskTypes";
export class TaskService {
    static async createTask(task: Partial<Task>): Promise<TaskState[]> {
        const res = await $api.post("/tasks", task);
        return res.data;
    }
    static async deleteTask(id: string): Promise<void> {
        await $api.delete(`/tasks/${id}`)
    }
    static async getTasks(): Promise<TaskState[]> {
        const res = await $api.get("/tasks");
        return res.data;
    }
}

