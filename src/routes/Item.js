import { Link } from "react-router-dom";

export default function Item({ id, userId, createdAt, modifiedAt, title, body, isVoiceNote, isPublic}) {
    const deleteNote = async () => {
        const response = await fetch(`http://localhost:8081/notes/${id}`, {
            method: "DELETE",
            headers: { "Authorization" : "Bearer " + localStorage.getItem("token") }
        });

        if(response.status === 204) window.location.reload();
    }

    return (
        <article key={id}>
            <h2>{title}</h2>
            <ul>
                <li>
                    {body}
                </li>
                <li>
                    Creation date: {createdAt}
                </li>
                <li>
                    Modification date: {modifiedAt}
                </li>
            </ul>
            <button onClick={deleteNote}>Delete note</button>

            <Link to={"/updateNote/" + id}>
                <button>Edit note</button>
            </Link>
        </article>
    );
}
