import { Link } from "react-router-dom";

export default function MainPage() {
    return (
        <main>
            <h1>Notas</h1>
            <p>Profe apruebame porfa</p>
            <Link to="/login">
                <button>
                    Login
                </button>
            </Link>
        </main>
    )
}