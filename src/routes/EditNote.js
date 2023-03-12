import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Logout from "./Logout";

export default function EditNote() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token")

    useEffect(() => {
        const expDate = new Date(localStorage.getItem("expiration"));

        if (!token || expDate.getTime() < new Date().getTime()) {
            navigate("/");
        }
    })

    const [title, setTitle] = useState("");
    const [bodyContent, setBodyContent] = useState("");
    const [isPrivate, setIsPrivtate] = useState(false);
    const { noteId } = useParams();

    const getNote = async () => {
        const response = await fetch(`http://localhost:8081/notes/${noteId}`, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        });

        if (response.status === 401) {
            alert("Go truck yourself");
            navigate("/notes");
        } 
    }

    const fetchUpdateNote = async () => {
        const response = await fetch(`http://localhost:8081/notes/${noteId}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
                "Authorization" : "Bearer " + localStorage.getItem("token")
            },
            body: JSON.stringify({
                "title" : title,
                "body" : bodyContent,
                "isPublic" : isPrivate,
                "isVoiceNote" : false
            }),
        })

        if (response === 200) navigate("/notes")
    }

    return (
        <main>
            <Logout></Logout>

            <h1>New note</h1>

            <form onSubmit={fetchUpdateNote}>
                <section>
                    <label htmlFor="title">Title: </label>
                    <input type={"text"} minLength={3} maxLength={20} name="title" onChange={(title) => { setTitle(title.target.value); }} id="title"></input>
                    <br />
                </section>

                <section>
                    <label htmlFor="body">Body: </label>
                    <br />
                    <textarea type={"text"} minLength={3} maxLength={200} name="body" onChange={(bodyContent) => { setBodyContent(bodyContent.target.value); }} id="bodyContent"></textarea>
                </section>

                <section>
                    <label htmlFor="private">Private: </label>
                    <input type={"checkbox"} name="private" onChange={(privateBox) => setIsPrivtate(privateBox.target.checked)}></input>
                </section>

                <input type={"submit"} value="Create"></input>

            </form>

            <Link to="/notes">Go back</Link>
        </main>
    )

}