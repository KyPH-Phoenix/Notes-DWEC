import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token")
        const expDate = new Date(localStorage.getItem("expiration"));
        
        if (token && expDate > new Date()) {
            navigate("/notes");
        }
    })

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const fetchLogin = async (event) => {
        event.preventDefault();

        const response = await fetch("http://localhost:8081/login", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            }),
        });

        if (response.status === 200) {
            const result = await response.json();

            const token = result.token;
            const expiration = result.expiration;

            console.log(result);
            console.log(token, expiration);

            localStorage.setItem("token", token);
            localStorage.setItem("expiration", expiration);

            navigate("/notes")
        }
    }

    return (
        <main>
            <h1>Login</h1>
            <form onSubmit={fetchLogin}>
                <section>
                    <label htmlFor="username">Username: </label>
                    <input name="username" type="text" id="username" placeholder="Introduce un nombre de usuario" onChange={(input) => { setUsername(input.target.value.toLowerCase().trim()); }} />
                </section>

                <section>
                    <label htmlFor="password">Password: </label>
                    <input name="password" type="password" id="password" placeholder="Introduce una contraseña" onChange={(input) => { setPassword(input.target.value.trim()); }}></input>
                </section>

                <input type="submit" value="Login"></input>
            </form>

            <p>Don't have an account? Sign up <Link to={"/signup"}>here</Link>.</p>
        </main>
    );
}