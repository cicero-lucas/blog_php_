import {React, useState} from 'react';
import Header from '../layout/header';
import Foote from '../layout/footer';
import './index.css'

export default function Cadastroc(){
    const [inputDados, setInputDados] = useState({nome:'',email:'', senha:'', confSenha:''})

    function enviardados(event){
        event.preventDefault();
        alert(Object.entries(inputDados));
        
    }
    
    return(
        <>
         <Header></Header>

         <form  method="post">
            <div className='campos'>
                <p>Faça seu Cadastro</p>
            </div>

            <div className="campos">
                <input type="text" name="nome" id="email"  placeholder='Digite seu nome completo' onChange={(el)=>setInputDados({...inputDados,nome:el.target.value})} value={inputDados.nome} />
            </div>

            <div className="campos">
                <input type="email" name="email" id="email"  placeholder='Digite seu email' onChange={(el)=>setInputDados({...inputDados,email:el.target.value})} value={inputDados.email} />
            </div>

            <div className="campos">
                <input type="password"  name='senha' id='senha' placeholder='Digite sua senha' onChange={(el)=>setInputDados({...inputDados,senha:el.target.value})} value={inputDados.senha}/>
            </div>

            <div className="campos">
                <input type="password"  name='senha' id='csenha' placeholder='Confirme senha' onChange={(el)=>setInputDados({...inputDados,confSenha:el.target.value})} value={inputDados.confSenha}/>
            </div>

            <div className="campos">
                <button type='submit' onClick={(event)=>enviardados(event)}>Cadastra-se</button>
            </div>
         </form>

         <Foote></Foote>
        </>
    )
}