/*TRILHA - 01*/

/*
import React, { useState } from "react";
import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import ProfileCard from "./components/ProfileCard";
import Card from "./components/Card";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import ContactForm from "./components/ContactForm";
import profileImage from "./img/joni mitchell_01.jpg"

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
         <h1>História da Música</h1>

      <ProfileCard
        name="Joni Mitchell "
        description="Joni Mitchell (Roberta Joan Anderson, CC), nascida em 7 de novembro de 1943, é uma cantora, compositora, poetisa, multi-instrumentista e artista plástica canadense"
        image={profileImage}
      />

      <div id="root">
      <Button text="Ouvir Música" />
      </div>

      

      <Card 
        title="Aqui você a encontra a história dos melhores artistas" 
        content="Vamos lá" 
      />

      <Gallery />

      <ContactForm />
    </>
  );
}

export default App;

*/




/*TRILHA - 2*/

/*
import Counter from "./components/Contador";
import Saudacao from "./components/Saudacao";
import ListaTarefas from "./components/ListaTarefa";
import ToggleVisibilidade from "./components/ToggleVisibilidade";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Bem-vindo A Trilha 2</h1>

      <Counter valorInicial={0} />
      <Saudacao nomeInicial="Usuário" />
      <ListaTarefas tarefasIniciais={["Estudar", "Trabalhar", "Treinar"]} />
      <ToggleVisibilidade texto="Essa Lista de tarefas vai te salvar!" />
    </div>
  );
}

export default App;

*/

//TRILHA -3 

//Exer -1,3 e 4 (Professora, usei o exercício 4 prara aplicar os demais)*/ 


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar_3";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Animal from "./pages/Animal";
import Rooms from "./pages/Rooms";
import RoomDetails from "./pages/RoomDetails";
import BookingSuccess from "./pages/BookingSuccess";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/animal/:name" element={<Animal />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/room/:id" element={<RoomDetails />} />
        <Route path="/booking-success" element={<BookingSuccess />} />
      </Routes>
    </Router>
  );
}

//Exer - 2 - Lista de Animais 

/*
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home_Animais";
import Animal from "./pages/Animal";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/animal/tigre">Lista animal</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/animal/:name" element={<Animal />} />
        </Routes>
      </div>
    </Router>
  );
}
*/
