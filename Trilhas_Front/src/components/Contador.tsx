import { useState } from "react";
import "./Contador.css";

interface CounterProps {
  valorInicial: number;
}

const Counter: React.FC<CounterProps> = ({ valorInicial }) => {
  const [contador, setContador] = useState(valorInicial);

  return (
    <div className="counter">
      <h2>Contador: {contador}</h2>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={() => setContador(contador - 1)}>Decrementar</button>
    </div>
  );
};

export default Counter;
