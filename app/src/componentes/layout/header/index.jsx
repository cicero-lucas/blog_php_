import React from "react";
import NavPricipal from "../nav";
import './heade.css';

export default function Header(){
    return(
        <>
            <header className="header">
                <div id="logo">
                    <h1>Blog Noticia</h1>
                </div>

               <NavPricipal tipo="1"/>
            </header>
        </>
    );
}