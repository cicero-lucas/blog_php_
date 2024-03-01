import React from "react";
import img from '../../../assets/img/images.jpg';
import './main.css';
export default function Main(){

    return(
        <>
            <main>
                <section className="caixaAp">
                    <div className="apImg">
                        <img src={img} alt="teste" />
                    </div>
                    <div className="apTexto">
                        <div className="apTtitul">
                            <h2>Faça a sua Postagem no blog</h2>
                            <p>Sua postagem pode ser relevante para a comunidade!</p>
                        </div>

                        <div className="btnAp">
                            <a href="#"><button>Faça seu Post</button></a>
                        </div>
                    </div>
                </section>

                <section className="post">

                </section>
            
                
            </main>
        </>
    );
}