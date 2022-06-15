import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTask } from "../redux/actions/task";
import { HeaderAuth } from "./HeaderAuth";
import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList";
const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => { dispatch(getTask()) }, []);
    return (
        <div className={"bg-dark"} >
            <div style={{ "display": "flex", "flexDirection": "column", "minHeight":"100vh"}}>
            <HeaderAuth />
            <TaskForm />
            <TaskList />
        </div>
        </div>
    );
}
export default Home;