import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

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

    

    return(
        <main>
            <h1>New note</h1>

            <form onSubmit={fetchEditNote}>
                <section>
                    <label htmlFor="title">Title: </label>
                    <input type={"text"} minLength={3} maxLength={20} name="title" onChange={ (title) => { setTitle(title.target.value); }}></input>
                    <br />
                </section>

                <section>
                    <label htmlFor="body">Body: </label>
                    <br />
                    <textarea type={"text"} minLength={3} maxLength={200} name="body" onChange={ (bodyContent) => { setBodyContent(bodyContent.target.value); }}></textarea>
                </section>

                <section>
                    <label htmlFor="private">Private: </label>
                    <input type={"checkbox"} name="private" onChange={ (privateBox) => setIsPrivtate(privateBox.target.checked) }></input>
                </section>

                <input type={"submit"} value="Create"></input>

            </form>

            <Link to="/notes">Go back</Link>
        </main>
    )
}