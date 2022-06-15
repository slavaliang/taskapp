import { useState } from "react";
import { Task } from "../types/task/taskTypes";
import "../App.css";
export interface TaskProps {
    task: Task;
    deleteTask: (arg0: string) => void;
    editTask: (arg0: string, arg1: string) => void;
}
export const TaskItem = ({ task, deleteTask, editTask }: TaskProps) => {
    const handleDeleteTask = () => deleteTask(task.id);
    const [newContent] = useState('');
    const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            editTask(task.id, newContent)
        }
    }
    return (
        <div className="card" style={{ width: '18rem', marginRight: '2%' }}>
            <div onKeyPress={handleSubmit} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">Task</h5>
                <p className="card-text">{task.name}</p>
                <button className="btn btn-danger" onClick={handleDeleteTask}>Delete</button>
            </div>
        </div>
    );
}
