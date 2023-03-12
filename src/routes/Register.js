import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Register() {
    let token = localStorage.getItem("toke  n")
    const navigate = useNavigate();

    const expDate = new Date(localStorage.getItem("expiration"));

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    if (token && expDate.getTime() > new Date().getTime()) {
        navigate("/notes");
    }
    
    const fetchRegister = async (event) => {
        event.preventDefault();
        console.log(password, username);

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