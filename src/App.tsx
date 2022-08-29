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
        <nav>
          {auth.user && <button onClick={handleLogout} className='button-logout'>Sair</button>}
        </nav>
      </header>
      <AppRouter/>
    </div>
  );
}