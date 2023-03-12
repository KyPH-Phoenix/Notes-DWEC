import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Register() {
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

    const fetchRegister = async (event) => {
        event.preventDefault();

        const response = await fetch("http://localhost:8081/signup", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            }),
        });

        if (response.status === 200) navigate("/login")
    }

    return (
        <main>
            <h1>Register</h1>
            <form onSubmit={fetchRegister}>
                <section>
                    <label htmlFor="username">Username: </label>
                    <input name="username" type="text" id="username" placeholder="Introduce un nombre de usuario" onChange={(input) => { setUsername(input.target.value.toLowerCase().trim()); }} />
                </section>

                <section>
                    <label htmlFor="password">Password: </label>
                    <input name="password" type="password" id="password" placeholder="Introduce una contraseña" onChange={(input) => { setPassword(input.target.value.trim()); }}></input>
                </section>

                <input type="submit" value="Register"></input>
            </form>

            <p>Already have an account? Login <Link to={"/login"}>here</Link>.</p>
        </main>
    );
}