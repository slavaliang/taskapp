import { login } from "../redux/actions/auth"
import { AuthReducer, User } from "../types/auth/authTypes";
import { useDispatch, useSelector } from "react-redux";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
    const state = useSelector((state: AuthReducer) => state.authReducer)
    const [username, setLog] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!username.trim && !password.trim) {
            return;
        }
        dispatch(login({ username: username, password: password } as User));
        setLog('');
        setPassword('')
    }
    const handleChangeInputLogin = (event: ChangeEvent<HTMLInputElement>) => {
        setLog(event.target.value);
    }
    const handleChangeInputPassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }
    return (
        <div style={{ background: "#0c1019", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <div className="alert alert-dark" style={{ width: "25%", background: "#0c141c" }}>
            <form style={{ margin: "auto" }} onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label" style={{ color: "#c9ced6" }}>Login</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChangeInputLogin} />
                    <div id="emailHelp" className="form-text" style={{ color: "#c9ced6" }}>We'll never share your login with anyone else</div>
                </div>
                <div className="mb-3">
                    <label className="form-label" style={{ color: "#c9ced6" }}>Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={handleChangeInputPassword} />
                </div>
                <button style={{ width: "100%" }} type="submit" className="btn btn-success " >Sign In</button>
            </form>
            {!state.isAuth ? <div></div> : <meta http-equiv="refresh" content="0;URL=http://taskapp.vercel.app/home" />}
            <div className="alert alert-dark" role="alert" style={{ background: "#0c1019", color: "#c9ced6", margin: "auto", marginTop: "4%" }}>New to TaskApp? <Link to="/registration">Create an account.</Link>
            </div>
        </div>
    </div>
    );
}
export default Login;