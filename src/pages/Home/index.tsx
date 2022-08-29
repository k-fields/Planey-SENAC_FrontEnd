import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import '../../index.css'

export const Home = () => {
    const auth = useContext(AuthContext);

    return (
        <>
            <span>Ir para: </span><Link to='/' className='link-pages-login'>Despesas</Link>
            <p className="welcome-text">Olá <b>{auth.user?.name}</b>, seja Bem-vindo!</p>

            <nav>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </nav>
        </>
    );
}