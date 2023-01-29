import { Profile } from "./Profile";
import { LoginButton } from "./LoginButton";
import { LogoutButton } from "./LogoutButton";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Episodios from "./pages/Episodios";
import Lugares from "./pages/Lugares";
import MiCuenta from "./pages/Mi cuenta";
import Desarrolladoras from "./pages/Desarrolladoras";

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
        <div>
          <div>
        <Navbar />

        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/episodios" element={<Episodios />} />
            <Route path="lugares" element={<Lugares />} />
            <Route path="miCuenta" element={< MiCuenta />} />
            <Route path="desarrolladoras" element={<Desarrolladoras />} />
          </Routes>

        </div>
        </div>

      </div>


    </div>

    
  );
}

export default App;
