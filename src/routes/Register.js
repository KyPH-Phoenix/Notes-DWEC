import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const doRegister = () => {
    DoRegister();
}

const DoRegister = () => {
    let token = localStorage.getItem("tokemn")
    const navigate = useNavigate();

    useEffect(() => {
        if (token) navigate("/notes")    
    }, navigate);
}

export default function Register() {
    return (
        <main>
            <h1>Register</h1>
            <form>
                <section>
                    <label htmlFor="username">Username: </label>
                    <input type={"Text"} name={"username"}></input>
                </section>

                <section>
                    <label htmlFor="password">Password: </label>
                    <input type={"Password"} name={"password"}></input>
                </section>

                <button onClick={doRegister()}>Register</button>
            </form>
            
            <p>Already have an account? Login <Link to={"/login"}>here</Link>.</p>
        </main>
    );
}