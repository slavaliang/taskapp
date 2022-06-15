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
            <form   onSubmit={handleSubmit} style={{ width: "70%", margin: "30px", height: "30%" }}>

                <div className="input-group mb-3" style={{ height: "60%" }} >
                    <input type="text" className="form-control" placeholder="..." aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={handleChangeInputValue}/>
                    <span className="input-group-text" id="basic-addon2">Content</span>
                </div>

                <button className="btn btn-primary" style={{ width: "100%" }}>Create</button>
            </form>
            
    );
}