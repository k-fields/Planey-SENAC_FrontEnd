import { useContext } from 'react';
import './App.css';
import { AuthContext } from './contexts/Auth/AuthContext';
import { AppRouter } from './routes';

export default function App() {
  const auth = useContext(AuthContext);

  const handleLogout = async () => {
    await auth.signout();
    window.location.href = window.location.href;
  }

  return (
    <div className="App">
      <header>
      <div className="hero_area">
            <header className="header_section">
                <div className="container-fluid">
                <nav className="navbar navbar-expand-lg custom_nav-container ">
                        <a className="navbar-brand" href="/">
                            <span>
                            Planey
                            </span>
                        </a>
                </nav>
                </div>
                </header>
            </div>
        <nav>
          {auth.user && <button onClick={handleLogout} className='button-logout header_section'>Sair</button>}
        </nav>
      </header>
      <AppRouter/>
    </div>
  );
}