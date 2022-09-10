import logo from '../../assets/logo.png'
import './styles.css';
import { ChangeEvent, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export const Login = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleLogin = async () => {
        if (email && password) {
            const isLogged = await auth.signin(email, password);
            if (isLogged) {
                navigate('/');
            } else {
                alert("Não deu certo.");
            }
        }
    }
    return (
        <div className="container">
            <div className="container-login">
                <div className="wrap-login">
                    <div className="login-form">
                        <img src={logo} alt='logo' className="login-form-img"/>

                        <div className='wrap-input'>
                            <input
                                type="text"
                                value={email}
                                className="input"
                                onChange={handleEmailInput}
                                placeholder="Email"
                            />
                            <span className="focus-input"></span>
                        </div>

                        <div className='wrap-input'>
                            <input
                                type="password"
                                value={password}
                                className="input"
                                onChange={handlePasswordInput}
                                placeholder="Senha"
                            />
                            <span className="focus-input"></span>
                        </div>

                        <div className='container-login-form-btn'>
                            <button onClick={handleLogin} className='login-form-btn'>Login</button>
                        </div>

                        <div className='text-center'>
                            <span className='text1'>Não possui conta?</span>
                            <Link to='/signup' className='text2'>Criar Conta.</Link>
                        </div>

                    </div> 
                </div>
            </div>
        </div>
    );
}