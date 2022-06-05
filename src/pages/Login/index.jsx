import { Container } from "./styled";
import React, { useState, useContext } from "react";

import { AuthContext } from "../../contexts/auth";


const Login = () => {

    const { login } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password);
    };


    return (
        <Container>
            <form className="form-login" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="exampleInputPassword1" 
                        placeholder="Password" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        />
                </div>
                <button type="submit" className="btn btn-primary">Entrar</button>
            </form>
        </Container>
    );
}

export default Login;