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
        <div style={{ display: "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "20px","marginLeft": "20%" , "marginRight": "20%", "placeContent": "start"}}className="bg-white rounded">
            <div onKeyPress={handleSubmit} style={{ "width": "100%", "marginLeft": "20px", "paddingBottom": "20px" }}>
                <div id="task" style={{ "minWidth": "60%", "overflowX": "hidden", "maxHeight": "auto", "overflowY": "auto", "minHeight": "50px", "height": "50px", "wordBreak": "break-all", "marginBottom": "10px", marginRight: "15px", "marginTop": "10px", "background": "rgba( 0,0,0,0 )", "color": "black" }}>{task.name}</div>
            </div>
            <div style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "center" }}>
                <button style={{ "marginRight": "30px" }} className="btn btn-danger" onClick={handleDeleteTask}>Delete</button>
            </div>
        </div>
    );
}
