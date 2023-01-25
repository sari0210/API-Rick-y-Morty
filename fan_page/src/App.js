import logo from './logo.svg';
import { LoginButton } from "./LoginButton";
import { Profile } from "./Profile";
import { LogoutButton } from "./LogoutButton";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <h1>Bienvenidos a la fan page de</h1>
      <p>Rick & Morty</p>
      <LoginButton />
        <Profile />
        <LogoutButton />
    </div>
  );
}

export default App;
