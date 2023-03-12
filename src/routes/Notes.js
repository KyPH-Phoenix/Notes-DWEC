import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Item from "./Item";

export default function Notes() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token")

    useEffect(() => {
        const expDate = new Date(localStorage.getItem("expiration"));

        if (!token || expDate.getTime() < new Date().getTime()) {
            navigate("/");
        }
    })

    const [notes, setNotes] = useState([]);

    const fetchNotes = async () => {
        const response = await fetch("http://localhost:8081/notes", {
            method: "GET",
            headers: { "Authorization": "Bearer " + token }
        })

        if (response.status === 200) {
            const result = await response.json();
            setNotes(result);
        }
    }

    fetchNotes();


    return (
        <section>
            <h1>Notes</h1>

            <Link to="/createNote">
                <button>New Note</button>
            </Link>

            {notes.map(Item)}
        </section>
    );
}