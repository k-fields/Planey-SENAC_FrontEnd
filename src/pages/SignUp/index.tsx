import logo from '../../assets/logo.png'
import './styles.css';
import { ChangeEvent, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export const SignUp = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNameInput = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleSignUp = async () => {
        if (email && password) {
            const isSignUp = await auth.signup(name, email, password);
            if (isSignUp) {
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
                                    value={name}
                                    className="input"
                                    onChange={handleNameInput}
                                    placeholder="Nome"
                                />
                                <span className="focus-input"></span>
                            </div>

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
                            <button onClick={handleSignUp} className='login-form-btn'>Cadastrar</button>
                        </div>

                        <div className='text-center'>
                            <span className='text1'>Já possui conta?</span>
                            <Link to='/' className='text2'>Faça Login</Link>
                        </div>

                    </div> 
                </div>
            </div>
        </div>
    );
}