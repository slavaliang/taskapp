import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTask } from "../redux/actions/task";
import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList";
const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => { dispatch(getTask()) }, []);
    return (
            <div style={{ background: "#0c1019", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "center" }} >
            <TaskForm />
            <TaskList />
            </div>
    );
}
export default Home;