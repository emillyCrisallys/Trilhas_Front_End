import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Bem-vindo ao nosso site!</h1>
      <p>Clique abaixo para saber mais.</p>
      <button onClick={() => navigate("/about")}>Ir para Sobre</button>
    </div>
  );
}
