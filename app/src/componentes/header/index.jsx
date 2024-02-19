import React from "react";
import './heade.css';

export default function header(){
    return(
        <>
            <header className="header">
                <div id="logo">
                    <h1>Blog Noticia</h1>
                </div>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Fazer login</a></li>
                        <li><a href="#">Cadastra-se</a></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}