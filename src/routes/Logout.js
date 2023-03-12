import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

export default function Logout() {
    const Exit = () => {
        const navigate = useNavigate();
    
        useEffect( navigate("/") );
    }
    
    return (
        <nav>
            <button onClick={ () => {
                localStorage.removeItem("token");
                localStorage.removeItem("expiration");

                Exit();
            } }>Log out</button>
        </nav>
    )
}