import logo from './logo.svg';
import { LoginButton } from "./login"
import { Profile } from './Profile';
import { LogoutButton } from './logout';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
      <h1>Bienvenidos a la fan page de</h1>
      <h1>Rick & Morty</h1>
      <LoginButton />
        <Profile />
        <LogoutButton />
      </body>
    </div>
  );
}

export default App;
