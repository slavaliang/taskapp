import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux"
import { createTask } from "../redux/actions/task"

export const TaskForm = () => {
    const [content, setContent] = useState("")
    const dispatch = useDispatch()
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!content.trim()) {
            return;
        }
        dispatch(createTask(content));
        setContent("");
    }
    const handleChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {

        setContent(event.target.value);
    }
    return (
        <form onSubmit={handleSubmit} style={{ "marginLeft": "10%", "marginRight": "10%" }} >
            <h2 style={{ "marginTop": "20px" ,color:"white" }}>Task</h2>
            <input className="form-control" style={{ "height": "100px", "border": "1px solid #1E90FF" }} onChange={handleChangeInputValue}></input>
            <h2></h2>
            <button style={{"marginBottom": "30px", "marginRight": "30px", "marginTop": "10px" }} className="btn btn-success">Add to list</button>
        </form >
    );
}