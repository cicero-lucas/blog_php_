import {React, useState} from 'react';
import Header from '../layout/header';
import Foote from '../layout/footer';
import { Link } from 'react-router-dom';
import './index.css'

export default function Login() {
    const [inputData, setInputData] = useState({emeil:'',senha:''});

    function enviardados(event){
        event.preventDefault();
        fazerLoguin(inputData);
    }

    const fazerLoguin= async (dados)=>{
        const {emeil,senha}=dados
        alert(senha)
        await fetch("http://127.0.0.1/php/blog_php_/index.php",{
            method:'POST',
            body:JSON.stringify(dados)
        })
        .then(res=>res.text())
        .then(res=>console.log(res));
        
    }
    
    return(
        <>
         <Header></Header>

         <form  method="post">
            <div className='campos'>
                <p>Faça seu Login</p>
            </div>

            <div className="campos">

                <input type="email" name="email" id="email"  placeholder='Digite seu email' onChange={(el)=>setInputData({... inputData,emeil:el.target.value})} value={inputData.emeil} />

            </div>

            <div className="campos">
                <input type="password"  name='senha' id='senha' placeholder='Digite sua senha' onChange={(el)=>setInputData(
                    {...inputData,senha:el.target.value}
                )}
                value={inputData.senha}/>
            </div>
            <div className="campos">
                <button type='submit' onClick={(event)=>enviardados(event)}>login</button>
            </div>
    
         </form>

         <div className='caixaopc'>
            <div className='opc'>
            <p> <Link to="/cadastro">Não tenho cadastro</Link></p>
            </div>
            <div className='opc'>
            <p> <Link to="/">voltar</Link></p>
            </div>
         </div>

         <Foote></Foote>
        </>
    )
}