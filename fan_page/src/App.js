import logo from './logo.svg';
import { LoginButton } from "./login"
import { Profile } from './Profile';
import { LogoutButton } from './logout';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <LoginButton />
        <Profile />
        <LogoutButton />
      </header>
    </div>
  );
}

export default App;
