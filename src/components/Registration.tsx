import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registration } from "../redux/actions/auth"
import { AuthReducer, User } from "../types/auth/authTypes";
import { Link } from "react-router-dom";
const Registration = () => {
    const state = useSelector((state: AuthReducer) => state.authReducer)
    const [username, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const dispatch = useDispatch();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!username.trim && !password.trim && !repeatPassword.trim) {
            return;
        }

        dispatch(registration({ username: username, password: password } as User));
        setLogin('');
        setPassword('');
        setRepeatPassword('');
    }




    const handleChangeInputLogin = (event: ChangeEvent<HTMLInputElement>) => {
        setLogin(event.target.value);
    }

    const handleChangeInputPassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleChangeInputRepeatPassword = (event: ChangeEvent<HTMLInputElement>) => {
        setRepeatPassword(event.target.value);
    }




    return (
        <div style={{ background: "#0c1019", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center",alignItems:"center" }}>
            <div className="alert alert-dark" style={{ width: "25%", background: "#0c141c"}}>
            <form style={{ margin: "auto" }} onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label" style={{ color: "#c9ced6" }}>Login</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChangeInputLogin}/>
                </div>
                <div className="mb-3">
                    <label className="form-label" style={{ color: "#c9ced6" }}>Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={handleChangeInputPassword}/>
                </div>
                <div className="mb-3">
                    <label className="form-label" style={{ color: "#c9ced6" }}>Repeat password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={handleChangeInputRepeatPassword}/>
                </div>

                    <button style={{ width: "100%" }} type="submit" className="btn btn-success ">Sign Up</button>
            </form>
            <div className="alert alert-dark" role="alert" style={{ background: "#0c1019", color: "#c9ced6" ,margin: "auto" , marginTop:"4%" }}>Already have an account?  <Link to="/login">Sign In</Link>
            </div>
            {password !== repeatPassword ? <div style={{ "marginLeft": "35%", "marginRight": "35%", "marginBottom": "10%" }} className="alert alert-danger"> Passwords do not match!!!</div> : <div></div>}
            {state.isAuth ? <meta http-equiv="refresh" content="0;URL=https://taskappcoursework.herokuapp.com/login"/> :<div></div>}
            </div>
        </div>
            );
}
export default Registration;