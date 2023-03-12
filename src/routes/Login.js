import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const doLogin = () => {
    DoLogin();
}

const error = "";

const DoLogin = async () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


        const response = await fetch("http://localhost:8080/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });
        
        const data = response.json;
}

export default function Login() {

    return (
        <main>
            <h1>Login</h1>
            <form>
                <section>
                    <label htmlFor="username">Username: </label>
                    <input type={"Text"} name={"username"}></input>
                </section>

                <section>
                    <label htmlFor="password">Password: </label>
                    <input type={"Password"} name={"password"}></input>
                </section>

                <button onClick={doLogin()}>Login</button>
            </form>
            
            <p>Don't have an account? Sign up <Link to={"/signup"}>here</Link>.</p>
        </main>
    );
}