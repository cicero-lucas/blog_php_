import './index.css';
import { Link } from 'react-router-dom';
export default function NavPricipal({tipo}){
   
    return(
        <>
             <nav > 
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li> <Link to="/cadastro">Cadastra-se</Link></li>
                    </ul>
                </nav>
        </>
    )
}