/*import React, { useState } from "react";



TRILHA - 01
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
*/

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
