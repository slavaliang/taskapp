import { useDispatch, useSelector } from "react-redux";
import { deleteTask, updateTask} from "../redux/actions/task";
import { TaskReducer } from "../types/task/taskTypes";
import { TaskItem } from "./TaskItem";
export const TaskList = () => {
    const state = useSelector((state: TaskReducer) => state.taskReducer)
    const dispatch = useDispatch();
    const editTask = (id:string,name:string)=>{
        dispatch(updateTask(id,name))
    }
    const removeTask = (id: string) => {
        dispatch(deleteTask(id));
    }
    var k = 0;
    return (
        <div style={{ display: "flex", justifyContent: "space-between", maxWidth: "70%", padding: '0', wordBreak: "break-all", maxHeight: "50%" }}>
            {state.tasks.map(task => (
                <TaskItem
                    key={"task" + String(k++)}
                    task={task}
                    deleteTask={removeTask}
                    editTask={editTask}
                />
            ))
            }
        </div>
    );
}